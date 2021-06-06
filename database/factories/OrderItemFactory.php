<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\OrderItem;
use Faker\Generator as Faker;

$factory->define(OrderItem::class, function (Faker $faker) {
    return [
        'order_id' => $faker->numberBetween(1,100),
        'item_id' => $faker->numberBetween(1,100),
        'qty' => $faker->numberBetween(1,100),
        'receiving_status' => 'requested'
    ];
});
