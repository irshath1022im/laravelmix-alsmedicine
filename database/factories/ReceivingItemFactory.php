<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\ReceivingItem;
use Faker\Generator as Faker;

$factory->define(ReceivingItem::class, function (Faker $faker) {
    return [
        //
        'receiving_id' => $faker->numberBetween(1,100),
        'item_id' => $faker->numberBetween(2,100),
        'qty' => $faker->numberBetween(1,1000),
        'unit_price' => $faker->numberBetween(15,175),
        'cost' => 100,
        'expiry_date' => $faker->dateTimeBetween('1year', '2year'),
        'remark'=> 'fake data'
    ];
});
