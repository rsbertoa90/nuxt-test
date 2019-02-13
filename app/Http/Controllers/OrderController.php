<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\OrderProduct;
use App\Product;


use App\Mail\Cotizacion;
use App\Mail\Aviso;
use Mail;
use PDF;
use Carbon\Carbon;
use View;

use Queue;
use App\Jobs\SaveNewOrder;

class OrderController extends Controller
{

    public function update(Request $request)
    {
        $order = Order::find($request->order);
        $field = $request->field;
        $order->$field = $request->value;
        $order->save();
        return $order;
    }

    public function panel(){
        return view('admin.orders');
    }


    public function get()
    {
        return Order::with('orderProducts.product.category')->with('city.state')->get();
    }

    public function userOrder(Request $request)
    {
        
            $request->validate([
                'email'=>'required|email',
                'list'=>'required'
            ]);
        
            Queue::push(new SaveNewOrder($request->all()));

            return;

            

      
            
    }

    public function adminOrder(Request $request)
    {
              $request->validate([
            'list'=>'required'
            ]);
             
       
      $order = Order::create([
          'email'=>$request->email,
          'phone'=>$request->phone,
          'message'=>$request->message,
          'name'=>$request->name,
          'seller' => $request->seller,
          'source'=>'local'
      ]);

       if ($request->shipping)
      {
          $order->shipping = 1;
          $order->cp = $request->cp;
          $order->city_id = $request->city;
          $order->address = $request->address;
          $order->transport = $request->transport;
          $order->save();
      }

      $products = json_decode($request->list);

      foreach ($products as $p)
      {  
        if ($p->units >= $p->pck_units){
            $price = $p->pck_price;
        }else {
            $price = $p->price;
        }
        OrderProduct::create([
              'product_id' => $p->id,
              'order_id'=>$order->id,
              'units'=>$p->units,
              'price'=>$price,
                 
              ]);
      }

      /* $order = Order::find($order->id);
       
      $date  = Carbon::now()->format('Y-m-d');  
      $today  = Carbon::now()->format('d-m-Y H:i');  
      
      $html = View::make('pdf.Cotizacion',compact('order','today'))->render();
       
      $pdf = PDF::loadHTML($html);
          
      return $pdf->stream("{$date}-Cotizacion.pdf"); */
            
    }

    public function toPDF($order)
    {
        $order = Order::find($order);

        $today = $order->created_at->format('d-m-Y H:i');
       
        /* dd($order->getTheFuckingCity($order->city_id)); */

        $html = View::make('pdf.Cotizacion',compact('order','today'))->render();
       
        $pdf = PDF::loadHTML($html);
        
        return $pdf->stream("{$today}-Cotizacion.pdf");

    }

    

   
}
