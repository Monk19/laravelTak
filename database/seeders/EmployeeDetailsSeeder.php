<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class EmployeeDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employee_details')->insert([
            [
                'FirstName' => "Mani",
                'LastName' => "Gunta",
                'Email_ID' => "manigunta@gmail.com",
                "State_ID" => "Andhra Pradesh",
                "City_ID" => "Visakahpatnam"
            ],
            [
                'FirstName' => "Devudu",
                'LastName' => "Govinda",
                'Email_ID' => "devudaGovinda@gmail.com",
                "State_ID" => "Andhra Pradesh",
                "City_ID" => "Tirupathi"
            ],
            [
                'FirstName' => "Ravi",
                'LastName' => "Chinta",
                'Email_ID' => "ravi@gmail.com",
                "State_ID" => "Andhra Pradesh",
                "City_ID" => "Eluru"
            ],
            [
                'FirstName' => "vasu",
                'LastName' => "nukaraju",
                'Email_ID' => "vasu@gmail.com",
                "State_ID" => "Telangana",
                "City_ID" => "Hydrabad"
            ],
            [
                'FirstName' => "Hari",
                'LastName' => "chowdary",
                'Email_ID' => "hChowdary@gmail.com",
                "State_ID" => "Telangana",
                "City_ID" => "Adalibadh"
            ],
            [
                'FirstName' => "dattu",
                'LastName' => "bachha",
                'Email_ID' => "Dattu@gmail.com",
                "State_ID" => "Meghalaya",
                "City_ID" => "Shillong"
            ],
        ]);
    }
}
