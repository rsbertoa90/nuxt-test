<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Config;
use Auth;
use Illuminate\Support\Facades\Cache;
class ConfigController extends Controller
{
     public function update(Request $request)
    {
        Cache::forget('configs');

        $config = Config::find(1);
        $field = $request->field;
        $config->$field = $request->value;
        $user = Auth::user();
        $config->user_id = $user->id;
        $config->save();
    }
    
    public function get()
    {
         return Cache::rememberForever('configs', function () {
             return Config::find(1);
        }); 
    }

}
