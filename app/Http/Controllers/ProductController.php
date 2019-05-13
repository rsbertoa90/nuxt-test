<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Metadata;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
use App\SearchHistory;

class ProductController extends Controller
{

     public function forgetCaches(){
        Cache::forget('productsNotPaused');
        Cache::forget('categories');
    }



    public function searchResults(Request $request)
    {
    
      // user can provide double space by accident, or on purpose:
      $search = $request->input('search');

      /* Guardo en historial de busquedas */
      $user = Auth::user();
      if (!$user || $user->role_id > 2)
      {
        SearchHistory::create([
          'term'=>$search
        ]);
      }

      // so with explode you get this:
      $array = explode(' ', $search);

      $products = Product::where('paused',0)->where(function ($q) use ($array) {
      foreach ($array as $value) {
        $q->orWhere('name', 'like', "%{$value}%");
      }
    })->pluck('id')->toArray();;
      
      
      return view('search-results',compact('products','search'));
    

    }

      public static function detail($categorySlug,$productSlug)
    {
           $slug = '/'.$productSlug;
           $product = Product::where('slug',$slug)->get()->first();
           if($product){
               $meta = new Metadata();
               $meta->metatitle = $product->name;
               $meta->metadescription = $product->description;
               return view('product',compact('product','meta'));
           } 
           return redirect('/');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->forgetCaches();
        
        return Product::create($request->only(['price',
                                                'category_id',
                                                'name',
                                                'code'
                                              ]));
    }

    



    public function update(Request $request)
    {
        $this->forgetCaches();

        $field = $request->field;
        $product = Product::find($request->product);
        $product->$field = $request->value;
        $product->save();
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->forgetCaches();
        Product::destroy($id);
        return;
    }
}
