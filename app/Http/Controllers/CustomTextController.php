<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CustomText;

class CustomTextController extends Controller
{
    //

    public function get($code)
    {
        return CustomText::where('code',$code)->get()->first();
    }

    public function getAll(){
        $customs = [
            'banner',
            'footer'
        ];
        $res = [];
        foreach ($customs as $code) {
            $res[] = CustomText::findOrCreate($code);
        }

        return $res;
    }

    public function update(Request $request){
        $field = $request->field;
        $custom = CustomText::find($request->id);
        $custom->$field = $request->value;
        $custom->save();
    }
}
