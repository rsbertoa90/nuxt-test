<?php

use Faker\Generator as Faker;
use App\Product;

$factory->define(Product::class, function (Faker $faker) {
    $path = $faker->image(public_path('/storage/images/products/'));
    $path = strstr($path, '/storage');
    return [
        'name' => $faker->name,
        'price'=>$faker->randomNumber(4),
        'pck_price'=>$faker->randomNumber(4),
        'pck_units'=>6,
        'image'=>$path
    ];
});
