<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SeminarController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LogedUserController;

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

Route::get('/seminars', [SeminarController::class, 'index']);
Route::get('/users', [UserController::class, 'index']);

Route::post('/seminars', [SeminarController::class, 'push']);
Route::post('/users', [UserController::class, 'push']);



