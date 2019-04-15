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

    public function save(request $request)
    {   
        $fields = $reuqest->only(['url','alt','slider']);
    }
}
