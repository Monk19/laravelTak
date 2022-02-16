<?php

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\EmployeeEnteryController;
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
Route::delete("/home/empdata/{user_Id}", function ($user_Id) {
    $res = DB::table('employee_details')->where('user_Id', $user_Id)->delete();
    if ($res == 1) {
        return response()->json(['message' => 'sucess'], 200);
    } else {
        return response()->json(['message' => 'User Not found'], 500);
    }
    return response()->json(["message" => "request accepted ", 200]);
});
Route::get("/states", function () {
    $states = DB::select('select * from states');
    return $states;
});
Route::post("/home/studentEntery", [EmployeeEnteryController::class, 'Posting']);
Route::post("/home/studentEntery/update/{id}", [EmployeeEnteryController::class, 'updating']);
