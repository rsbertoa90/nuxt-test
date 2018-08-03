<?php

use Illuminate\Database\Seeder;
use App\Suplier;

class SupliersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names =
        [
          'Tramotina',
          'Tsuji',
          'Patito',
          'otro',
        ];

        $supliers = [];

        foreach ($names as $name) {
          $sup = new Suplier();
          $sup->name = $name;
          $sup->save();
        }
    }
}
