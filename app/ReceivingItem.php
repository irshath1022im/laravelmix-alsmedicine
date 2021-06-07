<?php

namespace App;

use App\Item;
use App\Receiving;
use Illuminate\Database\Eloquent\Model;

class ReceivingItem extends Model
{
    //
    protected $fillable = ['item_id', 'receiving_id', 'qty', 'unit_price', 'cost', 'expiry_date','remark'];

    public function receiving()
    {
        return $this->belongsTo(Receiving::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
