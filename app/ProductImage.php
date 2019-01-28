<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;

class ProductImage extends Model
{
    protected $guarded =[];
    protected $table = 'product_images'; 
    
    public  function product ()
    {
        return $this->belongsTo(Product::class);
    }

    public function tobase()
    {
        $path = public_path() . $this->url;
        $type = pathinfo($path, PATHINFO_EXTENSION);
        $data = file_get_contents($path);
        $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
       
        return $base64;
    }
}
