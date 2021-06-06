<?php

namespace App\Http\Controllers\Api\V1;

use App\Receiving;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ReceivingResource;

class ReceivingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $result = Receiving::paginate(10);
        return ReceivingResource::collection($result);
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
            'receiving_date' => 'required',
            'po'=>'required',
            'supplier_id' => 'required'

        ]);

        $result = Receiving::create($validatedData);

        return response()->json(['message' => 'success', 'id' => $result->id] );

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
        $result = Receiving::with(['receiving_items' => function($query){
            return $query->with('item');
        }])->findOrFail($id);
        return response()->json($result);
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
