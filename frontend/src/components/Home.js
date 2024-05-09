import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to our PC Parts Store</h1>
            <a href="/products" className="home-button">Proceed to Shopping</a>
        </div>
    );
}

export default Home;