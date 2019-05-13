<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductImage;
use Illuminate\Support\Facades\Cache;

class ProductImageController extends Controller
{
  
    public function forgetCaches(){
        Cache::forget('productsNotPaused');
        Cache::forget('categories');
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->forgetCaches();
        $image = $request->file('image');
        $path = $image->storePublicly('/images/products');
        $path = '/storage/'.$path;
        $new = ProductImage::create([
                'product_id' => $request->product,
                'url' => $path,
                'order'=>2]);

        return $new;
    }



   


   public function update(Request $request)
    {
      $this->forgetCaches();
        $field = $request->field;
        $image = ProductImage::find($request->id);
        $image->$field = $request->value;
        $image->save();

        return $request->value;
        
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
        ProductImage::destroy($id);
    }
}
