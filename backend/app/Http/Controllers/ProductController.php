<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;
use App\Models\Order;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    function index()
    {
        $data= Product::all();
        return $data;
    }
    function detail($id)
    {
        $data= Product::find($id);
        return $data;
    }
    function search($query)
    {
        $data=Product::where('name', 'like', '%'.$query.'%')->get();
        return $data;
    }
    function addToCart(Request $req)
    {
        if ($req->userId) {

            $user_id = $req->userId;
            $product_id = $req->productId;
            $qty = $req->qty;

            $cart = Cart::updateOrCreate(
                ['user_id' => $user_id, 'product_id' => $product_id],
                ['qty' => $qty]
            );
            return $cart;
        }
        else {
            return response([
                'error'=>['fail to cart']
            ]);
        }
    }
    function cartItem($id)
    {
        $user_id = $id;
        return Cart::where('user_id',$user_id)->sum('qty');
    }
    function cartList($id)
    {
        if ($id) {
            $user_id=$id;
            $data=Cart::join('products','cart.product_id','=','products.id')
                        ->select('products.*','cart.id As cart_id','cart.qty')
                        ->where('cart.user_id',$user_id)
                        ->get();
            return $data;
        }
        else 
        {
            return view('pages/login');
        }
    }
    function removeCart($id)
    {
        $res=Cart::destroy($id);
        return $res;
    }
    function checkOut($id)
    {
        $user_id=$id;
        $data=Cart::join('products','cart.product_id','=','products.id')
                    ->where('cart.user_id','=', $user_id)
                    ->select('products.*','cart.id As cart_id','cart.qty')
                    ->get();
        return $data;
    }
}
