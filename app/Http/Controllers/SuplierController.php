<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Suplier;
class SuplierController extends Controller
{
    public function getAll()
    {
        return Suplier::with('products')->get();
    }

     public function save(Request $request)
    {
        $suplier = Suplier::create(['name' => $request->name]);

        return $suplier;
    }
}
