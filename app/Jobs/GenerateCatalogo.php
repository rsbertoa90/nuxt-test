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
        

        $images = ProductImage::all();
        foreach ($images as $img) {
            $img->base64 = $img->tobase();
            $img->save();
        }


        $path = public_path().'/MAJU-catalogo.pdf';
        $today = Carbon::now()->format('d/m/Y');
        $categories = Category::whereHas('products', function ($q){
            $q->orderBy('name')->where('paused',0)->whereHas('product_images');
        })->orderBy('name')->get();

        $html = View::make('pdf.Catalogo3',compact('categories','today'))->render();

        PDF::loadHTML($html)->save($path);

        
    }
}
