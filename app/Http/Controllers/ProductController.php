<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use  Illuminate\Foundation\Http\FormRequest;

class ProductController extends Controller
{

    public function getAll()
    {
        return Product::with('category')->with('suplier')->get();

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
        return $request->value;
    }

    public function changeImage(Request $request)
    {
        $file = $request->file('image');
        

        $path = $file->storePublicly('/images/products');
        $path = '/storage/'.$path;
        $product = Product::find($request->product);
        $product->image = $path;
        $product->save();
        return $product;

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
        $product->delete();

        
            if( $category->products->count() == 0){
                $category->delete();
            }
        

        return $category;

    }
}
