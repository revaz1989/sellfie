const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// A simple route to test the server
app.get('/', (req, res) => {
  res.send('Welcome to Sellfie Backend!');
});

// Import the products route
const productsRoute = require('./routes/products');

// Mount the products route at /products
app.use('/products', productsRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
