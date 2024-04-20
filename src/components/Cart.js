import React from 'react';

const Cart = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ₱ {item.price}</p>
                    <div>
                      <button className="btn btn-sm btn-primary mr-2" onClick={() => decrementQuantity(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-sm btn-primary ml-2" onClick={() => incrementQuantity(index)}>+</button>
                    </div>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total: ₱ {calculateTotal()}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;