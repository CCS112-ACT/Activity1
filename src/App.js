

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

export default App;
