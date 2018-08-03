<?php

use Illuminate\Database\Seeder;
use App\Category;
use App\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         $categories = Category::all();
        foreach ($categories as $category) {
            
            $products = factory(App\Product::class,5)->create(['category_id'=> $category->id]);
           
        }
    }
}
