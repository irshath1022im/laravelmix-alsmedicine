<?php

namespace App;

use App\Item;
use App\Receiving;
use Illuminate\Database\Eloquent\Model;

class ReceivingItem extends Model
{
    //

    public function receiving()
    {
        return $this->belongsTo(Receiving::class);
    }

    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
