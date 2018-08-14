<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories','CategoryController@getAll');
Route::get('/products','ProductController@getAll');

Route::get('/categories/{category}','CategoryController@get');

Route::get('/supliers', 'SuplierController@getAll');

Route::get('/orders','OrderController@get');


