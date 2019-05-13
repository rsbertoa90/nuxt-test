<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
  


    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id')->unsigned();
            $table->foreign('category_id')
                   ->references('id')
                   ->on('categories');
            $table->string('code')->unique();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('slug')->nullable();
            $table->integer('price')->default(0);
            $table->boolean('paused')->default(false);
            $table->integer('pck_units')->default(1);
            $table->integer('pck_price')->default(0);
            $table->boolean('offer')->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
