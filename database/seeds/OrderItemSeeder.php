<?php

use Illuminate\Database\Seeder;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\ItemRequest::class, 100)->create()
        ->each(function($request){
            $request->orderItem()->saveMany(factory(App\OrderItem::class, 3)->create());
        });
    }
}
