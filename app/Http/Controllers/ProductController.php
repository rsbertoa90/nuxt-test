<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductImage;
use App\Category;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use  Illuminate\Foundation\Http\FormRequest;

class ProductController extends Controller
{

    public function getAll()
    {
        return Product::with('category')->with('suplier')->with('images')->get();

    }

    public function update(Request $request) 
    {
        $product = Product::find($request->product);
        $field = $request->field;
        if ($request->field == 'paused'){
           $request->value = (int) ($request->value == 'true');
        }
        $product->$field = $request->value;
        $product->save();
        return $request->all();
    }

    public function uploadImage(Request $request)
    {
        $file = $request->file('image');
        

        $path = $file->storePublicly('/images/products');
        $path = '/storage/'.$path;
        $product = Product::find($request->product);
        
        $productImage = ProductImage::create([
            'url' => $path,
            'product_id' => $product->id
            ]);
        
        return;

    }

    public function save(Request $request)
    {
       $product = Product::create($request->except('_token'));
       $product = Product::with('category')->find($product->id);
       return $product;
    }

    public function delete($id)
    {
        $product = Product::find($id);
        $category = $product->category;
        
        $product->code = "del".$product->code;
        $product->save();
        $product->delete();

        
            if( $category->products->count() == 0){
                $category->delete();
            }
        

        return $category;

    }

    public function deleteImage(Request $request){

        $pi = ProductImage::find($request->id);
        $pi->delete();

        return redirect('/admin');

    }

    public function setFirstImage(Request $request){
        $product =Product::find($request->product);

        foreach ($product->images as  $image) {
            if ($image->id == $request->first){
                $image->first = 1;
                $image->save();
            }else{
                $image->first = 0;
                $image->save();
            }
        }
    }
}
