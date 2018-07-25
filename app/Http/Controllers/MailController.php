<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Cotizacion;

class MailController extends Controller
{

    private static function mailAdmin($email){
                    Mail::to('delMateDistribuidora@gmail.com')
                    ->cc('gisellaRomina678@gmail.com')
                    ->cc('rsbertoa90@gmail.com')
                    ->send($email);
  }




    public function cotizacion(Request $request)
    {
        $request->validate([
            'email'=>'required|email',
            'list'=>'required'
            ]);
            
      $products = json_decode($request->list);
      $phone = $request->phone;
      $message = $request->message;
      $email = $request->email;
      $total = $request->total;
      // return view('emails.admin.cotizador',compact('products','email','message','total'));
       
      self::mailAdmin(new Cotizacion(
            $email, 
            $phone,
            $message, 
            $products,
            $total));
    }
}
