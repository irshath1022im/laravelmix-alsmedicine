<?php

use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Order::class, 100)->create()
        ->each(function($request){
            $request->orderItems()->saveMany(factory(App\OrderItem::class, mt_rand(2, 6))->create());
        });
    }
}
