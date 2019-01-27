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
use App\Jobs\GeneratePricesList;
use Queue;

class PDFController extends Controller
{
    //

   

    public function pricesList()
    {
        
        $categories = Category::orderBy('name')->get();
       
        $today = Carbon::now()->format('d/m/Y');

         $html = View::make('pdf.ListaDePrecios',compact('categories','today'))->render();
        
         $pdf = PDF::loadHTML($html);

        return $pdf->download('MAJU-lista-de-precios.pdf');


    }
    
    public function dispatchPricesListJob()
    {

        $categories = Category::orderBy('name')->get();
       
       
        
       

        Queue::push(new GeneratePricesList($categories));

      return redirect('/home');
    }


    public function catalogo()
    {
        set_time_limit(300);

       $categories = Category::orderBy('name')->get();
        
        $today = Carbon::now()->format('d/m/Y');
        
       /*  return view('pdf.Catalogo',compact('categories','today')); */
        
        $html = View::make('pdf.Catalogo',compact('categories','today'))->render();
        
        $pdf = PDF::loadHTML($html);

        return $pdf->download('catalogo.pdf');

    }
}
