<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Mail\Cotizacion;
use App\Mail\Aviso;
use App\Order;
use App\Product;
use App\Category;
use App\Fileuri;
use App\OrderProduct;
use Mail;
use PDF;
use Carbon\Carbon;
use View;
use App\Jobs\GeneratePricesList;
use App\Jobs\GenerateCatalogo;
use App\Jobs\GenerateCategoryCatalogo;
use Queue;
use App\ProductImage;
use Illuminate\Support\Facades\Cache;
class PDFController extends Controller
{
    //

   

    
    public function dispatchPricesListJob()
    {

       
      Queue::push(new GeneratePricesList());

      return ;
    }

     public function dispatchCatalogoJob()
    {
        
        Queue::push(new GenerateCatalogo());

        return;
    }

    public function dispatchCategoryCatalogJob($id)
    {
       
        Queue::push(new GenerateCategoryCatalogo($id));

        return ;
    }


    public function testCatalogo(){
        
       


        $path = public_path().'/MAJU-catalogo.pdf';
        $today = Carbon::now()->format('d/m/Y');
       
        $categories = Category::with('products.images')->whereHas('products', function ($q){
            $q->Has('images')->orderBy('name')->where('paused',0);
        })->has('products.images')->orderBy('name')->get();
        
        foreach ($categories as  $c) {
            foreach ($c->products as $k=>$p) {
                if (!isset($p->images[0]))
                {
                    unset($c->products[$k]);
                    
                }
            }
        }
       /*  foreach ($categories as  $c) {
            foreach ($c->products as $k=>$p) {
                if (!isset($p->images[0]))
                {
                   return $p;
                    
                }
            }
        } */

        $html = View::make('pdf.Catalogo2',compact('categories','today'))->render();

        return $html;
       /*  PDF::loadHTML($html)->save($path); */
    }




     public function replaceCatalogo(Request $request)
    {
        $catalogo = $request->file('catalogo');
        $fileuri = Fileuri::findOrCreate('catalogo');

        if($fileuri->url){
            $path = public_path().$fileuri->url;
            if (file_exists($path)){
                unlink($path);
            }
        }
        
        $date = str_slug(Carbon::now());
        $fileuri->url = '/catalogo'.$date.'.pdf';
        $path = public_path().$fileuri->url;
        $fileuri->save();
        
        move_uploaded_file($catalogo,$path);

        return redirect('/admin/metadata');
    }
}
