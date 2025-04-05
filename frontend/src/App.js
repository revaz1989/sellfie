import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sellfie Frontend</h1>
      <h2>Products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;
