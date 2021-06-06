<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    //
    protected $fillable =['erp_code','name', 'initial_qty','thumbnail','remark'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }


    public function receiving_items()
    {
        return $this->hasMany(ReceivingItem::class);
    }

}
