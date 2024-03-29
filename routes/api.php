<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

Route::post('/registerUser', [RegisteredUserController::class, 'registerUser'])->name('registerUser');
Route::post('/login', [AuthenticatedSessionController::class, 'login'])->name('login');
Route::get('/checkAuthenticated', [AuthenticatedSessionController::class, 'checkAuthenticated'])->name('checkAuthenticated');
Route::middleware('auth')->post('/logout', [AuthenticatedSessionController::class, 'logout'])->name('logout');

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
