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

    public function panel()
    {
        return view('admin.orders');
    }


    public function get()
    {
        return Order::with('orderProducts.product.category')->with('city.state')->get();
    }

    public function userOrder(Request $request)
    {
        
            
        
            Queue::push(new SaveNewOrder($request->all()));

            return;

            

      
            
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
