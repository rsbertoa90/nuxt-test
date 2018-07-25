<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Cotizacion extends Mailable
{
   use Queueable, SerializesModels;

    public $email;
    public $phone;
    public $msg;
    public $products;
    public $total;
   
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($email,$phone,$msg,$products,$total)
    {
        $this->email = $email;
        $this->phone = $phone;
        $this->msg =$msg;
        $this->products= $products;
        $this->total = $total;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.admin.cotizador')
        ->with(['email'=>$this->email,
              'msg'=>$this->msg,
              'products'=>$this->products,
              'phone'=>$this->phone,
              'total' => $this->total]);
    }
}
