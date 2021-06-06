<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Item;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Item::class, function (Faker $faker) {
    return [
        //
        'name' =>Str::random(5),
        'initial_qty' => $faker->randomDigit(),
        'erp_code' => $faker->numerify('ALS- ###'),
        'category_id' => $faker->numberBetween(1,7),
        'thumbnail' => $faker->imageUrl($width=150, $height=150),
        'remark' => $faker->text($maxNbChars =50),
    ];
});
