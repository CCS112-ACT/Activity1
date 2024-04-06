import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

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
