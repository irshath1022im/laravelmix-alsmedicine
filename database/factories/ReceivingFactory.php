<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Receiving;
use Faker\Generator as Faker;

$factory->define(Receiving::class, function (Faker $faker) {
    return [
        //
        'receiving_date' => $faker->dateTimeBetween('-2month', '1month'),
        'po' => $faker->swiftBicNumber,
        'supplier_id'=>$faker->numberBetween(1, 10)
    ];
});
