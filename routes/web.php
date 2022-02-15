<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

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

Route::get('{path?}', function () {
    return view('welcome');
});

Route::get("/home/empdata", function () {

    $Employees = DB::select('select * from employee_details');

    return $Employees;
});
Route::delete("/home/empdata/{id}", function ($id) {
    $res = DB::table('employee_details')->when('user_ID', $id)->delete();
    if ($res == 1) {
        return response()->json(['message' => 'Something goes wrong while updating a product!!'], 200);
    } else {
        return response()->json(['message' => 'User Not found'], 200);
    }
});
