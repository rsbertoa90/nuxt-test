<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
/* use Illuminate\Contracts\Bus\SelfHandling; */

use App\Category;
use Carbon;
use PDF;
use View;
use App\Metadata;

class GeneratePricesList implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $html;
    private $path;
    public $tries = 1;
    public $timeout = 3600;

   /*  public $tries =2;
    public $timeout = 3600; */
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($html,$path)
    {
        $this->html = $html;
        $this->path = $path;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
       PDF::loadHTML($this->html)->save($this->path);

    }

    public function failed(){
      Metadata::create([
          'page' => 'job failed',
          'metatitle' => 'faile',
          'metadescription'=> 'fail!!'
      ]);
    }
}
