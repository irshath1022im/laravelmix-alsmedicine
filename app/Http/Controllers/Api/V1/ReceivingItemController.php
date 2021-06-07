<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\ReceivingItem;
use Illuminate\Http\Request;

class ReceivingItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //


        $validatedData = $request->validate([
            'item_id' => 'required',
            'receiving_id' => 'required',
            'qty' => 'required',
            'unit_price'=>'required',
            'cost' => 'required',
            'expiry_date' => 'required',
            'remark' => ''
        ]);

        $newItem = [
            'item_id' => $request->item_id,
            'receiving_id' => $request->receiving_id,
            'qty' => $request->qty,
            'unit_price'=>$request->unit_price,
            'cost' => $request->cost,
            'expiry_date' => $request->expiry_date,
            'remark' => $request->remark
        ];

        $result = ReceivingItem::create($newItem);

        return response()->json($result);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
