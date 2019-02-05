<?php

namespace App;
use App\Product;
use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use SoftDeletes;
    //
     protected $guarded =[];

    public function products()
    {
        return $this->hasMany(Product::class)->orderBy('name');
    }

    public function setNameAttribute($name)
    {
        $this->attributes['name']=$name;
        $this->attributes['slug']='/'.str_slug($name);
        $this->save();
    }


}
