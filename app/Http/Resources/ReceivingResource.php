<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReceivingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'receiving_date' => $this->receiving_date,
            'po' => $this->po,
            'supplier' => $this->supplier->name,
            'received_items_total' => $this->receiving_items->count(),
        ];
    }
}
