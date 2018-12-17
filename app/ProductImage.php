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
}
