<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Categorias;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorias = Categorias::all();

        return response()->json($categorias);
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
        $categoria = new Categorias();

       
        $categoria->title = $request->title;
        $categoria->description = $request->description;
        $categoria->color = $request->color;
        $categoria->codigoCategorias = $request->codigoCategorias;

        $categoria->save();

        return response()->json($categoria);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categoria = Categorias::find($id);

        return response()->json($categoria);
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
        $categoria = Categorias::findOrFail($id);

       
        $categoria->title = $request->title;
        $categoria->description = $request->description;
        $categoria->color = $request->color;
        $categoria->codigoCategorias = $request->codigoCategorias;

        $categoria->update();

        return response()->json($categoria);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categoria = Categorias::findOrFail($id);
        $categoria->delete();
    
        return response()->json(['message' => 'categoria eliminado correctamente']);
    }
}
