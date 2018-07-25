<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class OrderProduct extends Model
{
    protected $table = 'order_products';
   use Illuminate\Database\Eloquent\SoftDeletes;
}
