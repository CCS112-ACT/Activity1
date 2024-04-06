import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Shampoo', description: 'Cleans and nourishes your hair for a refreshing wash', price: 10 },
  { id: 2, name: 'Toothbrush', description: 'Keep your smile bright and healthy with our premium toothbrush', price: 15 },
  { id: 3, name: 'Shower Gel', description: 'Invigorate your senses with our luxurious shower gel', price: 20 },
  { id: 4, name: 'Conditioner', description: 'Achieve silky smooth hair with our revitalizing conditioner', price: 13 },
  { id: 5, name: 'Face Wash', description: 'Gently cleanse and rejuvenate your skin with our refreshing face wash', price: 50 }, 
  { id: 6, name: 'Shaving Cream', description: 'Experience a smooth and comfortable shave with our rich shaving cream', price: 70 },
  { id: 7, name: 'Lotion', description: 'Hydrate and soften your skin with our moisturizing lotion', price: 85 },
  { id: 8, name: 'Deodorant', description: 'Stay fresh and confident all day with our long-lasting deodorant', price: 75 },
  { id: 9, name: 'Body Scrub', description: 'Exfoliate and renew your skins radiance with our invigorating body scrub', price: 90 },
  { id: 10, name: 'Hand Sanitizer', description: 'Keep your hands clean and protected on-the-go with our convenient hand sanitizer', price: 95 },
];

const Product = ({ product, onAddToCart }) => {
  const { name, description, price } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ₱{price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Cart Summary</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
        </div>
      ))}
      <p>Total: ₱{items.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>E-Commerce Website</h1>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart items={cartItems} />
    </div>
  );
};

export default App;