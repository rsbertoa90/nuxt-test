<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterOrderproductPrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('SET `sql_safe_updates` = 0 ');
        DB::statement('UPDATE  `order_products` set `price` = `price`*100 ');
        DB::statement('SET `sql_safe_updates` = 1 ');
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('SET `sql_safe_updates` = 0 ');
        DB::statement('UPDATE `order_products` set `price` = `price`/100 ');
        DB::statement('SET `sql_safe_updates` = 1 ');
    }
}
