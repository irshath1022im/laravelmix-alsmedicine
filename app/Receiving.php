<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receiving extends Model
{
    //
    protected $fillable = ['receiving_date', 'po', 'supplier_id'];

    public function receiving_items()
    {
        return $this->hasMany(ReceivingItem::class);
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }

}
