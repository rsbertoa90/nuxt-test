<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Metadata;
use Illuminate\Support\Facades\Cache;
class MetadataController extends Controller
{

     public function update(Request $request)
    {
        Cache::forget('metadatas');
        $field = $request->field;
        $meta = Metadata::find($request->id);
        $meta->$field = $request->value;
        $meta->save();
    }

    public function get($page)
    {   
        return Metadata::where('page',$page)->get()->first();
    }

     public function getAll(){
        
        if ( Cache::has('metadatas') ){
            return Cache::get('metadatas');
        }
        else{

            $pages = ['home',
                      'cotizador',
                      'contacto',];
            
            $res = [];
    
            foreach ($pages as $page)
            {
                $res[] = Metadata::findOrCreate($page);
            }
    
            return $res;
        }
        
    }


    public function page($page)
    {
        $meta = Metadata::where('page',$page)->get()->first();
        return view('admin.metadatas',compact('meta'));
    } 


}
