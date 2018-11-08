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

    public function save(Request $request)
    {
        $category = Category::create(['name' => $request->name]);

        return $category;
    }

    public function update(Request $request)
    {
        $category = Category::find($request->id);
        $field = $request->field;
        $category->$field = $request->value;
        $category->save();
    }

    public function destroy($id){
        Category::destroy($id);
    }

      public function uploadImage(Request $request)
    {   
        
       
        $category = Category::find($request->id);
        $file = $request->file('image');
        if ($file){
           
            $ext = $file->getClientOriginalExtension();
            
             $filename = public_path('storage/images/categories/'.str_slug($category->name).'.'.$ext) ;
            
            if(file_exists($filename)){

                unlink($filename);
   
            }
            
            
            $path = $file->storeAs('/images/categories',str_slug($category->name).'.'.$ext);
            $category->image = '/storage/'.$path;
            $category->save();
        }
        return redirect('/admin/metadata');
    }

}
