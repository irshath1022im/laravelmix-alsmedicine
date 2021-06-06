<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'requested_date' => $faker->dateTimeBetween('-2 months', 'now'),
        'status' => 'requested',
        'remark' => 'test',
    ];
});
