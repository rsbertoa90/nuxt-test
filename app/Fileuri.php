<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fileuri extends Model
{
    //
    protected $guarded = [];

    public static function findOrCreate($name)
    {
        $fileuri = Fileuri::where('name',$name)->get()->first();
        if (!$fileuri)
        {
            $fileuri = new Fileuri();
            $fileuri->name = $name;
        }

        return $fileuri;
    }
}
