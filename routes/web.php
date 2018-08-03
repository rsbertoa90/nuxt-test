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

    Route::put('/product/update','ProductController@update');

    Route::post('/product','ProductController@save');
    Route::delete('/product/{id}','ProductController@delete');

    Route::post('/product/image', 'ProductController@changeImage')->middleware('optimizeImages');

    Route::post('/category/','CategoryController@save');

    Route::post('/suplier/','SuplierController@save');
    
});


Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/cotizer/send', 'MailController@cotizacion');

Route::get('/logout','HomeController@logout');
