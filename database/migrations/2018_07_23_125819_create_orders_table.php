<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('source')->default('online');
            $table->text('message')->nullable();
            $table->text('comments')->nullable();
            $table->string('name')->nullable();
            $table->string('seller')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string ('city')->nullable();
            $table->string('cp')->nullable();
            $table->string('status')->default('pendiente');
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
        Schema::dropIfExists('orders');
    }
}
