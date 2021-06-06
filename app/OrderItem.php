<?php

namespace App;

use App\Order;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    //

    protected $fillable = ['item_id', 'order_id', 'qty', 'receiving_status'];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
