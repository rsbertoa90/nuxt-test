<?php

namespace App;
use App\Product;
use App\Order;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class OrderProduct extends Model
{
    protected $guarded = [];
    protected $table = 'order_products';
//    use Illuminate\Database\Eloquent\SoftDeletes;


    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function Order()
    {
        return $this->belongsTo(Order::class);
    }

      public function setPriceAttribute($value)
    {
        $this->attributes['price'] = $value * 100;
    }

    public function getPriceAttribute($value)
    {
        return $value / 100 ;
    }

}
