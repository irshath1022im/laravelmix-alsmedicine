<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Supplier;
use Faker\Generator as Faker;

$factory->define(Supplier::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->name(),
        'contact_no' => $faker->phoneNumber,
        'address' => $faker->address
    ];
});
