<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $category = [
            ['name' => 'NEEDLES', 'thumbnail' =>'' ],
            ['name' => 'TUBES', 'thumbnail' =>'' ],
            ['name' => 'READER', 'thumbnail' =>'' ],
            ['name' => 'GELATINE', 'thumbnail' =>'' ],
            ['name' => 'SPRAY', 'thumbnail' =>'' ],
            ['name' => 'SRING', 'thumbnail' =>'' ],
            ['name' => 'ALCOHOL', 'thumbnail' =>'' ]
        ];

        foreach ($category as $value) {
          Category::create($value);
        }

    }
}
