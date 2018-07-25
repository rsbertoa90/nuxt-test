<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use app\Product;

class CategoryController extends Controller
{
    public function getAll(){
        return Category::with('products')->get();
    }

    public function get($id)
    {
        return Category::with('products')->find($id);
    }
}
