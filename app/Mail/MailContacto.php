<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MailContacto extends Mailable
{
    use Queueable, SerializesModels;

    private $data;
    private $city;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data,$city)
    {
        //
        $this->data= $data;
        $this->city= $city;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
       return $this->from('multibazarmaju@gmail.com')->subject('Mensaje desde contacto en www.mayoristamaju.com')->view('mails.contacto')
            ->with(['data'=>$this->data, 'city'=>$this->city]);
    }
}
