<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Suplier;
use Illuminate\Support\Facades\Cache;

class SuplierController extends Controller
{
    public function getAll()
    {
        return Cache::rememberForever('supliers', function () {
             return Suplier::with('products')->get();
        }); 
        
    }

     public function save(Request $request)
    {
        Cache::forget('supliers');

        $suplier = Suplier::create(['name' => $request->name]);

        return $suplier;
    }

     public function update(Request $request)
    {
        Cache::forget('supliers');

        $suplier = Suplier::find($request->id);
        $field = $request->field;
        $suplier->$field = $request->value;
        $suplier->save();
    }

    public function destroy($id)
    {
        Cache::forget('supliers');
        Suplier::destroy($id);
    }
}
