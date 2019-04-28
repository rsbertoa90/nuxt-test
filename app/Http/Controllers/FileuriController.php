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
}
