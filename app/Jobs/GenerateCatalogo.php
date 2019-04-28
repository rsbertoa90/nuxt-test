<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Category;
use App\ProductImage;
use Carbon\Carbon;
use PDF;
use View;
use Dompdf\Dompdf;
use Dompdf\Options;
use App\Fileuri;
class GenerateCatalogo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $tries = 1;
    public $timeout = 3600;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
     
        $fileuri = Fileuri::findOrCreate('catalogo');
        if($fileuri->url && file_exists(public_path().$fileuri->url))
        {
            unlink(public_path().$fileuri->url);
        }

        
        $date = str_slug(Carbon::now());
        $fileuri->url = '/catalogo'.$date.'.pdf';
        $path = public_path().$fileuri->url;

        $categories =Category::with('products.images')
                    ->with(['products' => function($q){
                        $q->where('paused',0);
                    }])
                    ->whereHas('products' , function($q){
                $q->where('paused',0)->orderBy('name');
            })->orderby('name')->get();
        
        foreach ($categories as  $c) {
            foreach ($c->products as $k=>$p) {
                if (!isset($p->images[0]))
                {
                    unset($c->products[$k]);
                    
                }
            }
        }

        $today = Carbon::now()->format('d/m/Y');
        $html = View::make('pdf.Catalogo2',compact('categories','today'))->render();

        $fileuri->save();
        PDF::loadHTML($html)->save($path); 

        
    }
}
