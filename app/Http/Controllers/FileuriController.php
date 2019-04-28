<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Fileuri;

class FileuriController extends Controller
{
    //
    public function get()
    {
        
        return Fileuri::all();
   
    }

    public function redirectCatalogo()
    {
        $fileuri = Fileuri::where('name','catalogo')->get()->first();
        
        if ($fileuri->url)
        {
            return redirect($fileuri->url);
        }
        
    }
    public function redirectPrecios()
    {
        $fileuri = Fileuri::where('name','precios')->get()->first();
        
        if ($fileuri->url)
        {
            return redirect($fileuri->url);
        }
        
    }
}
