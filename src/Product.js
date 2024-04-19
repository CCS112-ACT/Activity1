import React from 'react';

const Product = ({ name, price, addToCart }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button className="btn btn-primary" onClick={() => addToCart({ name, price })}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;