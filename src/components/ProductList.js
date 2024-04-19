import React from 'react';
import '../styles/ProductList.css';
import cpuProcessorImage from '../images/Intel_Core_i7-11700K.png';
import graphicsCardImage from '../images/NVIDIA_GeForce_RTX_3080.png';
import motherboardImage from '../images/ASUS_ROG_Strix_Z590-E_Gaming.png';
import memoryImage from '../images/Corsair_Vengeance_LPX_16GB__2x8GB__DDR4_3200MHz.png';
import storageImage from '../images/Samsung_970_EVO_Plus_1TB_NVMe_M.2.png';
import psuImage from '../images/EVGA SuperNOVA 850 G5, 80 Plus Gold 850W.png';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'CPU Processor', description: 'Intel Core i7-11700K', price: 350, image: cpuProcessorImage },
    { id: 2, name: 'Graphics Card', description: 'NVIDIA GeForce RTX 3080', price: 800, image: graphicsCardImage },
    { id: 3, name: 'Motherboard', description: 'ASUS ROG Strix Z590-E Gaming', price: 300, image: motherboardImage },
    { id: 4, name: 'Memory (RAM)', description: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz', price: 100, image: memoryImage },
    { id: 5, name: 'Storage (SSD)', description: 'Samsung 970 EVO Plus 1TB NVMe M.2', price: 150, image: storageImage },
    { id: 6, name: 'Power Supply (PSU)', description: 'EVGA SuperNOVA 850 G5, 80 Plus Gold 850W', price: 150, image: psuImage },
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