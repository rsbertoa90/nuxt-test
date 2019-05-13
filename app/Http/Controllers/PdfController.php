<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use PDF;
use Carbon\Carbon;
use App\Jobs\GeneratePricesList;
use Queue;
use Illuminate\Support\Facades\Cache;

class PdfController extends Controller
{
    public function prices()
    {
      
        $date = str_slug(Carbon::now());
        $newPath = '/precios-'.$date.'.pdf';
        if(Cache::has('prices_url'))
        {
            if(file_exists(public_path().Cache::get('prices_url'))){
                unlink(public_path().Cache::get('prices_url'));
            }
            Cache::forget('prices_url');
        }
        Cache::forever('prices_url',$newPath); 
       
        Queue::push(new GeneratePricesList($newPath));

        return ;
    }


    public function imageEmbed($image)
    {
       

        // Read image path, convert to base64 encoding
        $imageData = base64_encode(file_get_contents($image));

        // Format the image SRC:  data:{mime};base64,{data};
        $src = 'data:'.mime_content_type($image).';base64,'.$imageData;

        // Echo out a sample image
       return $src;
    }


    public function downloadPricesList()
    {
        
        if (Cache::has('prices_url'))
        {
   
        
            return redirect(Cache::get('prices_url'));
        }
    }
}
