import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Product.css';

export default function Product({ cartItem }) {
    const [data, setData] = useState([]);
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const { id } = useParams();

    const user = JSON.parse(localStorage.getItem('user-info'));
    const userId = user ? user.id : '';

    useEffect(async () => {
        let result = await fetch('http://127.0.0.1:8000/api/detail/' + id);
        result = await result.json();
        setData(result);
    }, [id])


    const productId = data.id;
    async function addToCart() {
        if (!userId) {
            navigate('/login');
        }
        let item = { userId, productId, qty };
        let result = await fetch("http://127.0.0.1:8000/api/add_to_cart", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        cartItem();
        console.log(result);
    }

    return (
        <>
            {console.log(productId)}
            <div className="row my-4 container bg-light m-auto product-container">
                <div className="col-12 col-md-6 mt-5">
                    <h4 className="product-name">{data.name}</h4>
                    <p className="product-category"><b>Category: </b> {data.category}</p>
                    <p className="product-price"><b>Price: </b>₱ {data.price}</p>
                    <div className="product-quantity">
                        <label for="qu"><b>Quantity:</b> </label>
                        <input className="form-control-sm text-center me-3 product-quantity-input" id="qty" type="number" value={qty} onChange={(e) => setQty(e.target.value)} min="1" style={{ maxWidth: '5rem' }} required />
                    </div>
                    <button className="btn btn-outline-info mt-3 product-button" onClick={addToCart} type="button" id="button-addon1" >
                        <i className="fas fa-shopping-cart px-2"></i> Add To Cart
                    </button>
                </div>
                <div className="col-12 bg-light mt-3 border-top product-details-container">
                    <div className="p-3 details-2 ">
                        <h4 className="fw-bold product-details-title">Product Details</h4>
                        <p className="product-details-description">{data.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
