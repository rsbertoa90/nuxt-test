<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->softDeletes();
            $table->timestamps();
        });

        DB::insert("INSERT INTO `states` (`id`, `name`) VALUES
        (1, 'Buenos Aires'),
        (2, 'Buenos Aires-GBA'),
        (3, 'Capital Federal'),
        (4, 'Catamarca'),
        (5, 'Chaco'),
        (6, 'Chubut'),
        (7, 'Córdoba'),
        (8, 'Corrientes'),
        (9, 'Entre Ríos'),
        (10, 'Formosa'),
        (11, 'Jujuy'),
        (12, 'La Pampa'),
        (13, 'La Rioja'),
        (14, 'Mendoza'),
        (15, 'Misiones'),
        (16, 'Neuquén'),
        (17, 'Río Negro'),
        (18, 'Salta'),
        (19, 'San Juan'),
        (20, 'San Luis'),
        (21, 'Santa Cruz'),
        (22, 'Santa Fe'),
        (23, 'Santiago del Estero'),
        (24, 'Tierra del Fuego'),
        (25, 'Tucumán');"
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('states');
    }
}
