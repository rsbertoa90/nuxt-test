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

Route::get('/failed-jobs','AdminController@getFailedJobs');

Route::get('/categories','CategoryController@getAll');
Route::get('/category/{id}','CategoryController@get');
Route::get('/products','ProductController@getAll');
Route::get('/productsnotpaused','CategoryController@getNotPaused');

Route::get('/categories/{category}','CategoryController@get');

Route::get('/supliers', 'SuplierController@getAll');

Route::get('/orders','OrderController@get');

Route::get('/meta','MetadataController@getAll');

Route::get('/states','StateController@get');

Route::get('/city/{id}','StateController@getCity');

Route::get('/custom-text/{code}','CustomTextController@get');
Route::get('/custom-texts','CustomTextController@getAll');

Route::get('/slides','SlideController@get');

Route::get('/fileuris','FileuriController@get');