<?php

namespace App\Http\Controllers\Api\V1;

use App\Item;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $searchValue = $request->searchValue;
        $filterBy = $request->filterBy;


        $result = Item::
                    when( $searchValue, function($query)use($searchValue)
                    {
                        return $query->where('name', 'like', '%'.$searchValue.'%')
                                    ->orWhere('erp_code', 'like', '%'.$searchValue.'%');
                    })
                    ->paginate(10)
                    ->appends($request->except('page'));


        return ItemResource::collection($result);
        // return response()->json($result, 200);
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
