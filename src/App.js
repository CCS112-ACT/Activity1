
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ViewCart from './components/ViewCart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const incrementQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity++;
    setCart(newCart);
  };

  const decrementQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
      setCart(newCart);
    }
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">HOMEPAGE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/products">STORE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/cart">MY CART</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />} />
          <Route path="/viewcart" element={<ViewCart cart={cart} removeFromCart={removeFromCart} />} /> {}
        </Routes>
      </div>
    </Router>

  );
}

export default App;