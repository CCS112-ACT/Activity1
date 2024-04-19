
import React from 'react';
import '../styles/ProductList.css';


const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'CPU Processor', description: 'Intel Core i7-11700K', price: 350 },
    { id: 2, name: 'Graphics Card', description: 'NVIDIA GeForce RTX 3080', price: 800 },
    { id: 3, name: 'Motherboard', description: 'ASUS ROG Strix Z590-E Gaming', price: 300 },
    { id: 4, name: 'Memory (RAM)', description: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz', price: 100 },
    { id: 5, name: 'Storage (SSD)', description: 'Samsung 970 EVO Plus 1TB NVMe M.2', price: 150},
    { id: 6, name: 'Power Supply (PSU)', description: 'EVGA SuperNOVA 850 G5, 80 Plus Gold 850W', price: 150 },
  ]; 

  return (
    <div className="product-list-container">
      <h2 className="product-category">PC Parts</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-details">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ₱ {product.price}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;