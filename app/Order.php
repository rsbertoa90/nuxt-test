<?php

namespace App;

use App\OrderProduct;
use App\City;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Order extends Model
{
    use SoftDeletes;
     protected $guarded =[];


     public function City()
     {
         return $this->belongsTo(City::class,'city_id','id');
     }


     public function OrderProducts()
     {
         return $this->hasMany(OrderProduct::class);
     }

    

     public function getTheFuckingCity($id)
     {
         return City::find($id);
     }
}
