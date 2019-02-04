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

class GenerateCategoryCatalogo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $category_id;
    public $tries = 1;
    public $timeout = 3600;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($category_id)
    {
        $this->category_id = $category_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //

        $path = public_path().'/CATEGORY-catalogo.pdf';
        $today = Carbon::now()->format('d/m/Y');
        $categories = Category::where('id',$this->category_id)->with('products.images')->whereHas('products', function ($q){
            $q->orderBy('name')->where('paused',0);
        })->orderBy('name')->get();
        
        foreach ($categories as  $c) {
            foreach ($c->products as $k=>$p) {
                if (!isset($p->images[0]))
                {
                    unset($c->products[$k]);
                    
                }
            }
        }


        $html = View::make('pdf.Catalogo2',compact('categories','today'))->render();

        PDF::loadHTML($html)->save($path); 

    }
}
