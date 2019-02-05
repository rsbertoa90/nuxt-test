<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use app\Product;

class CategoryController extends Controller
{
    public function getAll(){
        return Category::with('products.images')->orderBy('name')->get();
        
        
    }

    public function getOne($id){
        return Category::find($id)->with('products.images')->get()->first();
    }


    public function getNotPAused(){

        $categories = Category::with('products.images')->with(['products' => function($q){
                $q->where('paused',0)->orderBy('name');
            }])->orderby('name')->get();
        
            return $categories;
        
    }

    public function get($id)
    {
        return Category::with('products.images')->find($id);
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
    

    public function categoryPage($slug)
    {   
        $slug = '/'.$slug;
        $category = Category::where('slug','=',$slug)->get()->first();
        
        if ($category){
            $id = $category->id;
            return view('category',compact('id'));
        }
        else{
            return redirect('/');
        }
    }


    public function slugifyAll(){
        $cats = Category::all();

        foreach ($cats as  $cat) {
            $cat->slug = '/'.str_slug($cat->name);
            $cat->save();
        }

        return redirect('/');
    }
}
