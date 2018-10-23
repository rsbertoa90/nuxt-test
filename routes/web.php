<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::middleware('CheckAdmin')->prefix('/admin/')->group(function () {
    
    Route::get('/','AdminController@admin');
    Route::get('/reporte','AdminController@report');

    Route::get('/pedidos','OrderController@panel');

    Route::put('/product/update','ProductController@update');

    Route::post('/product','ProductController@save');
    Route::delete('/product/{id}','ProductController@delete');

    Route::post('/product/image', 'ProductController@changeImage')->middleware('optimizeImages');

    Route::post('/category','CategoryController@save');
    Route::put('/category','CategoryController@update');

    Route::post('/suplier','SuplierController@save');
    Route::put('/suplier','SuplierController@update');

    Route::post('/cotizacion','OrderController@adminOrder');
    
    Route::get('/pdf/{order}', 'OrderController@toPDF');

    Route::put('/order','OrderController@update');

    Route::put('/config','ConfigController@update');

    Route::get('/metadata','MetadataController@page');
    Route::put('/metadata','MetadataController@update');
});

Route::get('/pdf/{order}', 'OrderController@toPDF');


Route::get('/config','ConfigController@get');

Route::get('/getuser','UserController@get');

Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/cotizer/send', 'OrderController@userOrder');

Route::get('/logout','HomeController@logout');

Route::get('/descargar-lista-de-precios','PDFController@pricesList');