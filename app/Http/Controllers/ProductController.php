<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Category;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use  Illuminate\Foundation\Http\FormRequest;

class ProductController extends Controller
{
    public function update(Request $request) 
    {
        $product = Product::find($request->product);
        $field = $request->field;
        $product->$field = $request->value;
        $product->save();
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
       $product = Product::create($request->except('_token','category_id'));
       $category = Category::find($request->category_id);
       $product->categories()->attach($category);
       return $product;
    }

    public function delete($id)
    {
        $product = Product::find($id);
        $categories = $product->categories;
        $deletedCategories = [];

        $product->delete();

        foreach ($categories as $c)
        {
            if( $c->products->count() == 0){
                $deletedCategories[] = $c;
                $c->delete();
            }
        }

        return $deletedCategories;

    }
}
