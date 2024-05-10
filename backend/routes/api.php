<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\backend\ProductManageController;
use App\Http\Controllers\backend\AdminController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/logout', function () {
    Session::forget('user');
    return view('pages/login');
});

// Route::view('/register','pages.register');
Route::post('/register', [UserController::class,'register']);
Route::view('/user_login','pages.login');
Route::post('/user_login', [UserController::class,'login']);

Route::get('/', [ProductController::class,'index']);
Route::get('detail/{id}', [ProductController::class,'detail']);
Route::post('add_to_cart', [ProductController::class,'addToCart']);
Route::get('/cartitem/{id}', [ProductController::class,'cartItem']);
Route::get('/cartlist/{id}', [ProductController::class,'cartList']);
Route::delete('/removeitem/{id}', [ProductController::class,'removeCart']);

Route::group(['prefix'=>'admin'], function(){
    Route::group(['middleware'=>'admin.guest'], function(){
        Route::view('/login','admin.login')->name('admin.login');
        Route::post('/login',[AdminController::class,'login'])->name('admin.auth');
    });
});