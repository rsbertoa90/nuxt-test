<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CustomText extends Model
{
    //
    protected $table ='customtexts';
    protected $guarded =[];

    public static function findOrCreate($code)
    {
        $custom = CustomText::where('code',$code)->get()->first();

        if (!$custom){
            $custom = CustomText::create(['code'=>$code]);
        }

        return $custom;
    }
}
