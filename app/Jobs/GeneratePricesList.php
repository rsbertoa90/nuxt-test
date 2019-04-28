<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
/* use Illuminate\Contracts\Bus\SelfHandling; */

use App\Category;
use Carbon\Carbon;
use PDF;
use View;
use App\Metadata;
use App\Fileuri;
class GeneratePricesList implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    
    public $tries = 1;
    public $timeout = 3600;

   /*  public $tries =2;
    public $timeout = 3600; */
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $fileuri = Fileuri::findOrCreate('precios');
        if($fileuri->url && file_exists(public_path().$fileuri->url))
        {
            unlink(public_path().$fileuri->url);
        }

        $date = str_slug(Carbon::now());
        $fileuri->url = '/lista-de-precios'.$date.'.pdf';
        $path = public_path().$fileuri->url;


       
        $categories = Category::with('products.images')
        ->with(['products' => function($q){
            $q->where('paused',0);
        }])
        ->whereHas('products' , function($q){
            $q->where('paused',0)->orderBy('name');
        })->orderby('name')->get();
        
        $today = Carbon::now()->format('d/m/Y');
        $html = View::make('pdf.ListaDePrecios',compact('categories','today'))->render();

        $fileuri->save();
        PDF::loadHTML($html)->save($path);

    }

/*     public function failed(){
      Metadata::create([
          'page' => 'job failed',
          'metatitle' => 'faile',
          'metadescription'=> 'fail!!'
      ]);
    } */
}
