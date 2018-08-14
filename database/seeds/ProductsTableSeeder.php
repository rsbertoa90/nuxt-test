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
        $images = [
            '/storage/images/products/1.png',
            '/storage/images/products/2.jpg',
        ];

        $index = 0;
         $categories = Category::all();
        foreach ($categories as $category) {
            
            $products = factory(App\Product::class,5)
                ->create(['category_id'=> $category->id,
                          'image'=>$images[$index]]);
           if ($index == 1){$index = 0;}
           else {$index=1;}
        }
    }
}
