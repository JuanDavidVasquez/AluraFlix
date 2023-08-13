<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;



use App\Models\Videos;
use Illuminate\Http\Request;

class ViedoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $videos = Videos::all();

        return response()->json($videos);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $video = new Videos();

       
        $video->title = $request->title;
        $video->description = $request->description;
        $video->link = $request->link;
        $video->categoria = $request->categoria;
        $video->codigo = $request->codigo;
        $video->imagen = $request->imagen;

        $video->save();

        return response()->json($video);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Videos::find($id);

        return response()->json($video);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $video = Videos::findOrFail($id);

        $video->title = $request->input('title');
        $video->description =  $request->input('description');
        $video->link =  $request->input('link');
        $video->categoria =  $request->input('categoria');
        $video->codigo =  $request->input('codigo');
        $video->imagen =  $request->input('imagen');

        $video->update();

        return response()->json($video);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Videos::findOrFail($id);
        $video->delete();
    
        return response()->json(['message' => 'Video eliminado correctamente']);
    }
}
