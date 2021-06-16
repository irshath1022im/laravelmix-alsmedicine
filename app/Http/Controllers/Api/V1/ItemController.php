<?php

namespace App\Http\Controllers\Api\V1;

use App\Item;
use Illuminate\Http\Request;
use Image;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemResource;
use Illuminate\Support\Facades\Storage;

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


        $result = Item::when($searchValue, function ($query) use ($searchValue) {
            return $query->where('name', 'like', '%' . $searchValue . '%')
                ->orWhere('erp_code', 'like', '%' . $searchValue . '%');
        })
            ->when($filterBy, function ($query) use ($filterBy) {
                return $query->where('category_id', $filterBy);
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

        // dump($request->get('thumbnail'));

        // dump($request->all());
        // dump($request->input('thumbnail'));

        // dump($request->file($request->thumbnail));

        $request->validate([
            'name' => 'required',
            'thumbnail.type' => 'required|starts_with:image/',
            'thumbnail.base64' => 'required',
        ]);


        if ($request->file) {
            $position = strpos($request->file, ';');
            $sub = substr($request->file, 0, $position);
            // dump($sub);
            $ext = explode('/', $sub)[1];
            // dump($ext);

            $name = $request->name . "." . $ext;
            $img = Image::make($request->file)->resize(300, 200);
            $upload_path = 'images/itemThumbnail/';
            $image_url = $upload_path . $name;
            $img->save($image_url);

            dump($img->dirname . $img->basename);
        }



        // dump($request->thumbnail['base64']);

        // $img = str_replace('data:' . $request->thumbnail['type'] . ';base64,', '', $request->thumbnail['base64']);

        // // dump($img);

        // $decoded = base64_decode($img);

        // return file_put_contents(storage_path() . "testImage/test3.jpeg",  $decoded);

        // $path = Storage::disk('public')->putFileAs('testImage', $decoded, $request->thumbnail['name'] . '.', 'png');

        // dump($path);




        // dump($decoded);

        // $image = imagecreatefromstring($decoded);



        // dump($file->guessExtension());

        // $name2 = Storage::disk('local')->putFileAs('TestImage', $file, $request->name. '.'. $file->guessExtension() );

        // if ($request->get('thumbnail')) {
        //     return response()->json($request->get('file'));
        // } else {
        //     return response()->json('nothing');
        // }
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
