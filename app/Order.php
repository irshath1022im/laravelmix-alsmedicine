<?php

namespace App;

use App\OrderItem;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //

    protected $fillable = ['requested_date', 'status', 'remark'];

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

}
