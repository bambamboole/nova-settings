<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

// Route::get('/endpoint', function (Request $request) {
//     //
// });
Route::get('/sections', '\Bambamboole\NovaSettings\Http\SectionController@index');
Route::get('/sections/{slug}', '\Bambamboole\NovaSettings\Http\SectionController@show');
Route::put('/fields/{slug}', '\Bambamboole\NovaSettings\Http\FieldController@update');
