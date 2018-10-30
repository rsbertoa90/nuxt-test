<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomtextsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customtexts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->nullable();
            $table->text('text')->nullable();
            $table->string('font')->nullable();
            $table->string('color')->default('000');
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
        Schema::dropIfExists('customtexts');
    }
}
