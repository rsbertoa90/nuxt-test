<?php

use Faker\Generator as Faker;
use App\Product;

$factory->define(Product::class, function (Faker $faker) {
    $path = $faker->image(public_path('/storage/images/products/'));
    $path = strstr($path, '/storage');
    $price = $faker->randomNumber(2);
    $pck_price = $price - ($price*0.2);
    return [
        'name' => $faker->name,
        'code' => $faker->randomNumber(4),
        'price'=>$price,
        'pck_price'=>$pck_price,
        'pck_units'=>6,
        'image'=>$path
    ];
});
