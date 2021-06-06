<?php

use Illuminate\Database\Seeder;

class ReceivingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Receiving::class, 100)->create()
                    ->each(function($receiving){
                        $receiving->receiving_items()->saveMany(factory(App\ReceivingItem::class, mt_rand(2, 6))->create());
                    });
     }
}
