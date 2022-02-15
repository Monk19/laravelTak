<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('states')->insert([
            [
                'StateName' => "Andhra Pradesh",
            ],  [
                'StateName' => "Telangana",
            ],
            [
                'StateName' => "New Delhi",
            ],
            [
                'StateName' => "Utter Pradesh",
            ],  [
                'StateName' => "Karnataka",
            ]
        ]);
    }
}
