<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class UserController extends Controller
{
    //
    public function get()
    {
        
        if(Auth::check())
      {
        return Auth::user();  
      }
        $user = new User();
        $user->role_id = 3;
        return $user;
    }
}
