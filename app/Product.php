<?php

namespace App;

use App\Category;
use App\Suplier;
use App\OrderProduct;
use App\ProductImage;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Product extends Model
{
     use SoftDeletes;

     protected $guarded =[];

     
    public function setPriceAttribute($value)
    {
        $this->attributes['price'] = $value * 100;
    }

    public function getPriceAttribute($value)
    {
        return $value / 100 ;
    }
    public function setPckPriceAttribute($value)
    {
        $this->attributes['pck_price'] = $value * 100;
    }

    public function getPckPriceAttribute($value)
    {
        return $value / 100 ;
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function suplier()
    {
        return $this->belongsTo(Suplier::class);
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class)->orderBy('first','desc');
    }
}
