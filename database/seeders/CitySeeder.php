<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('cities')->insert([
            [
                "CityName" => "Hydrabad",
                "State_ID" => 2
            ],
            [
                "CityName" => "Bangalore",
                "State_ID" => 5
            ], [
                "CityName" => "Tirupathi",
                "State_ID" => 1
            ],
            [
                "CityName" => "Eluru",
                "State_ID" => 1
            ],
            [
                "CityName" => "Adalibadh",
                "State_ID" => 2
            ],
        ]);
    }
}
