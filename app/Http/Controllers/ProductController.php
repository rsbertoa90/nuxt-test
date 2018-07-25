<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
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
}
