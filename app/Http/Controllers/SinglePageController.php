<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;

class SinglePageController extends Controller
{
    //
    public function index() {
      
        return View::make('myapp');
    }


}
