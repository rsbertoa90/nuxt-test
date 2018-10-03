<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\City;

class State extends Model
{
    protected $guarded =[];

    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
