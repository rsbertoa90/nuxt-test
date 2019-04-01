<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use App\User;
use Hash;
use Illuminate\Http\Request;

class LoginController extends Controller
{
  public function login(Request $request)
  { 
    $mail = $request->email;
    $user = User::where('email',$mail)->get()->first();

    if ($user)
    {
        $checked = Hash::check($request->password,$user->password);
        if ($checked){
            Auth::login($user);
            return $user;
        }
        else {
            return null;
        }
    }
  }

  public function logout()
  {
      Auth::logout();
      return redirect('/');
  }

    
}
