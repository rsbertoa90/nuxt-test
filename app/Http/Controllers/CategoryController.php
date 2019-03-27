<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use app\Product;
use Illuminate\Support\Facades\Cache;
class CategoryController extends Controller
{
    public function getAll(){
        return Category::with('products.images')->orderBy('name')->get();
        
        
    }

    

    public function forgetCaches(){
         Cache::forget('productsNotPaused');
          Cache::forget('categories');
          Cache::forget('products');
    }

    public function getNotPAused(){

       return Category::notPaused();   
    
    }


    public function get($id)
    {        
       return Cache::rememberForever('categories', function () {
            return Category::with('products.images')->find($id);
        });
    }

    public function save(Request $request)
    {
        $this->forgetCaches();
       
        $max = Category::withTrashed()->find(\DB::table('categories')->max('id'));

        $id = $max->id+1;
        $category = new Category();
        $category->id = $id;
        $category->name = $request->name;

        $category->save();
        
     
        return $category;
    }

    public function update(Request $request)
    {
          $this->forgetCaches();

        $category = Category::find($request->id);
        $field = $request->field;
        $category->$field = $request->value;
        $category->save();

    }

    public function destroy($id){
        Category::destroy($id);
          $this->forgetCaches();
    }

      public function uploadImage(Request $request)
    {   
        
        $this->forgetCaches();

        $category = Category::find($request->id);
        $file = $request->file('image');

        if ($file){
            $ext = $file->getClientOriginalExtension();
            
            $filename = public_path('storage/images/categories/'.str_slug($category->name).'.'.$ext) ;
            
            if(file_exists($filename)){
                
                echo('unlink');
                $imageurl = getcwd() . $category->image;
                echo($imageurl);
                unlink($filename);
                unlink($imageurl);
   
            }
            
            
            $path = $file->storeAs('/images/categories',str_slug($category->name).'.'.$ext);
            $category->image = '/storage/'.$path;
            $category->save();
            dd($path);
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
          $this->forgetCaches();
        $cats = Category::all();

        foreach ($cats as  $cat) {
            $cat->slug = '/'.str_slug($cat->name);
            $cat->save();
        }

        return redirect('/');
    }
}
