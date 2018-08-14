<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Mail\Cotizacion;
use App\Mail\Aviso;
use App\Order;
use App\Product;
use App\Category;
use App\OrderProduct;
use Mail;
use PDF;
use Carbon\Carbon;
use View;

class PDFController extends Controller
{
    //

   

    public function pricesList()
    {
        $categories = Category::all();
        $today = Carbon::now()->format('d/m/Y');

         $html = View::make('pdf.ListaDePrecios',compact('categories','today'))->render();
        
         $pdf = PDF::loadHTML($html);

        return $pdf->download('MAJU-lista-de-precios.pdf');


    }
}
