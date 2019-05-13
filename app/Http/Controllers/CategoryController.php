<?php

namespace App\Http\Controllers;
use App\Category;
use App\Product;
use App\Metadata;
use App\ProductImage;
use Illuminate\Support\Facades\Cache;

use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function forgetCaches(){
        Cache::forget('productsNotPaused');
        Cache::forget('categories');
    }


    public function uploadImage(Request $request)
    {
        $this->forgetCaches();
        $category = Category::find($request->id);
        $file = $request->file('image');
        $ext = $file->getClientOriginalExtension();
        $path = $file->storeAs('/images/categories',$category->slug.'.'.$ext);
        $category->image = '/storage/'.$path;
        $category->save();
        return $category;
    }

    public static function detail($slug)
    {   
       $category = Category::where('slug','/'.$slug)->get()->first();
        if ($category){
           $meta = new Metadata([
               'metatitle'=>$category->metatitle,
               'metadescription'=>$category->metadescription
               ]);
          
           return view('category',compact('category','meta'));
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
        return Category::create(['name'=>$request->name]);
        
    }

   

   

    public function getAll()
    {
         return Cache::rememberForever('categories', function () {
            return Category::with('products.images')->with('products.category')->orderBy('name')->get();
         });
    }

    public function productsNotPaused()
    {
        return Category::notPaused();
    }

    public function update(Request $request)
    {
        $this->forgetCaches();
        $field = $request->field;
        $category = Category::find($request->id);
        $category->$field = $request->value;
        $category->save();
        return $category;
    }
}
