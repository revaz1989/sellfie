const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products - fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /products - add a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
