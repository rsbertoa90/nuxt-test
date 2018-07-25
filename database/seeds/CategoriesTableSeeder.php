<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\Product;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $category_names =
        [
          'ollas',
          'cubiertos',
          'limpieza',
          'vajilla',
        ];
        $categories = [];
        foreach ($category_names as $name) {
          $category = new Category();
          $category->name = $name;
          $category->save();
        }
    }
}
