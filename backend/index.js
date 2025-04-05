const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

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

// Import Sequelize instance and sync database
const sequelize = require('./models');

sequelize.sync()  // Creates the database file and tables if they don't exist
  .then(() => {
    console.log("Database synced");
    // Start the server after successful sync
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Database sync error:", err);
  });
