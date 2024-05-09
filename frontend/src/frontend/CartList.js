import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CartList.css';

export default function CartList({ cartItem }) {
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [checkoutCompleted, setCheckoutCompleted] = useState(false); // New state variable

    const user = JSON.parse(localStorage.getItem('user-info'));
    const userId = user ? user.id : '';
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    async function removeItem(cartId) {
        const confirmation = window.confirm('Are you sure you want to remove this item?');
        if (confirmation) {
            let result = await fetch("http://127.0.0.1:8000/api/removeitem/" + cartId, {
                method: 'DELETE'
            });
            result = await result.json();
            cartItem();
            getData();
            console.log(result);
        }
    }

    async function getData() {
        let result = await fetch('http://127.0.0.1:8000/api/cartlist/' + userId);
        result = await result.json();
        setData(result);
        calculateTotalAmount(result);
    }

    function calculateTotalAmount(cartItems) {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.qty;
        });
        setTotalAmount(total);
    }

    async function handleCheckout() {
        setCheckoutCompleted(true);
    }

    return (
        <main className="cart-list">
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h2>Shopping Cart</h2>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-info" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>

                {checkoutCompleted && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-success" role="alert">
                                Thank you for purchasing!
                            </div>
                        </div>
                    </div>
                )}

                <div className="row">
                    {data.map((item) =>
                        <div className="col-md-12 cart-item" key={item.cart_id}>
                            <div className="card-body">
                                <div>
                                    <h5 className="cart-item-title">{item.name}</h5>
                                </div>
                                <p className="cart-item-details">
                                    <span className="cart-item-price">Unit price: ₱ {item.price}</span>
                                    <span className="cart-item-qty">Quantity: {item.qty}</span>
                                    <span className="cart-item-total">Total price: ₱ {item.price * item.qty}</span>
                                </p>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-warning remove-btn" onClick={() => removeItem(item.cart_id)}>Remove Item</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h4>Total Amount: ₱ {totalAmount}</h4>
                    </div>
                </div>

                {!data[0] && <div className="text-danger fs-4 text-center">Cart is Empty!</div>}
            </div>
        </main>
    )
}