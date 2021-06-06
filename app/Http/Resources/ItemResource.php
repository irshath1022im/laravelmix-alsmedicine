<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'name' => $this->name,
            'erp_code' => $this->erp_code,
            'thumbnail' => $this->thumbnail,
            'initial_qty' => $this->initial_qty,
            'category' => $this->category->name,
        ];

    }
}
