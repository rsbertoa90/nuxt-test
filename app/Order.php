<?php

namespace App;

use App\OrderProduct;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Order extends Model
{
    use SoftDeletes;
     protected $guarded =[];

     public function OrderProducts()
     {
         return $this->hasMany(OrderProduct::class);
     }
}
