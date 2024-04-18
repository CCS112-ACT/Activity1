import React from 'react';
import '../styles/ViewCart.css';

const ViewCart = ({ cart, removeFromCart, onCheckout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <p>Price: ₱ {item.price}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCart;