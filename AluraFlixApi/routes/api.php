<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ViedoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*------------------
                    -
      Videos        -
                    -
-------------------*/

Route::controller(ViedoController::class)->group(function(){
    Route::get('/videos', 'index');
    Route::get('/video-show/{id}', 'show');
    Route::put('/video-update/{id}', 'update');
    Route::post('/video-save', 'store');
    Route::delete('/video-destroy/{id}', 'destroy');
});

/*------------------
                    -
      Categorias    -
                    -
-------------------*/

Route::controller(CategoriaController::class)->group(function(){
    Route::get('/categorias', 'index');
    Route::get('/categoria-show/{id}', 'show');
    Route::put('/categoria-update/{id}', 'update');
    Route::post('/categoria-save', 'store');
    Route::delete('/categoria-destroy/{id}', 'destroy');
});