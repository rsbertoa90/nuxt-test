<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

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


class SaveNewOrder implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $req;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($req)
    {
        $this->req = $req;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
      $request = $this->req;

      $products = json_decode($request['list']);
      $phone = $request['phone'];
      $message = $request['message'];
      $email = $request['email'];
      $total = $request['total'];
            
      $order = Order::create([
          'email'=>$email,
          'phone'=>$phone,
          'message'=>$request['message'],
          'name'=>$request['name'],
          'source'=>'online'
      ]);

      if ($request['shipping'])
      {
          $order->shipping = 1;
          $order->cp = $request['cp'];
          $order->city_id = $request['city'];
          $order->address = $request['address'];
          $order->transport = $request['transport'];
          $order->save();
      }

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

      $order = Order::find($order->id);
       
       Mail::to($order->email)
       ->cc('roominagii@gmail.com')
            ->send(new Cotizacion($order));
    }
}
