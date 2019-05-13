<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Config;
use Auth;
use Illuminate\Support\Facades\Cache;
class ConfigController extends Controller
{
    public function get()
    {
        return Cache::rememberForever('config',function(){
            return Config::find(1);
        });
    }

    public function update(Request $request)
    {
        Cache::forget('config');
        $user =  Auth::user();
        $field = $request->field;
        $config = Config::find(1);
        $config->$field = $request->value;

        $config->user_id = $user->id;
        $config->save();
    }
}
