<?php

namespace App;

use App\RequestItem;
use Illuminate\Database\Eloquent\Model;

class ItemRequest extends Model
{
    //

    public function requestedItems()
    {
        return $this->hasMany(RequestItem::class);
    }

}
