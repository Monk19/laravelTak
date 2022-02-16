<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeeEnteryController extends Controller
{
    //
    public function posting(Request $request)
    {

        // print_r($request);
        $succ = DB::table('employee_details')->insert($request->all());
        return response()->json(["message" => "request accepted", 200]);
    }
    public function updating(Request $request, $id)
    {

        $update = DB::table('employee_details')->where('user_ID', $id)->limit(1)->update($request->all());
        return response()->json(["message" => "request accepted", 200]);
    }
}

// $post = Post::create($request->all());
// $post->Emp_name = $request->input('Emp_name');
// $post->Emp_email = $request->input('Emp_email');
// $post->Emp_phonenumber = $request->input('Emp_phonenumber');
// $post->Emp_gender = $request->input('Emp_gender');
// $post->save();