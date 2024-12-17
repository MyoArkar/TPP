<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() {
        $products = Product::all();
        return view('products.index', compact('products'));
    }
    public function show($id) {
        $product = Product::find($id);
        return view('products.show', compact('product'));
    }
    public function delete($id){
        $product = Product::find($id);
        $product->delete();
        return redirect()->route('products.index');
    }
}
