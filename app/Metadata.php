<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metadata extends Model
{
    //
    protected $guarded =[];
    protected $table="metadatas";

    public static function findOrCreate($page)
    {
        $meta = self::where('page',$page)->get()->first();
        if (!$meta)
        {
            $meta = self::create(['page'=>$page]);
        }
        return $meta;
    }

   
}
