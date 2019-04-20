<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Slide;

class SlideController extends Controller
{
    //

    public function get()
    {
        return Cache::rememberForever('slides', function(){
            return Slide::all();
        });
    }


    public function update(request $request)
    {
        Cache::forget('slides');
        $field = $request->field;
        $slide = Slide::get($request->id);
        $slide->$field = $request->value;
        $slide->save();
    }

    public function create(request $request)
    {   
        $fields = $request->only(['url','alt','slider']);

        $file = $request->file('image');
        
        if ($file){
            
            $path = $file->storePublicly('/images/slides');
            $slide =new Slide();
            $slide->slider = $fields['slider'];
            $slide->alt = $fields['alt'];
            $slide->url = $fields['url'];
            $slide->image = '/storage/'.$path;
            $slide->save();
            
        }
        
        Cache::forget('slides');
        return;
    }


    
}
