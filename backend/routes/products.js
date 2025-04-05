const express = require('express');
const router = express.Router();

// Dummy product data
const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 }
];

// GET /products - return list of products
router.get('/', (req, res) => {
    res.json(products);
});

module.exports = router;
