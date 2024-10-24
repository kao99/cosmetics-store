const express = require('express');
const Product = require('./productModel');
const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const newCosmetic = new Product({
      productName: req.body.productName,
      price: req.body.price,
      description: req.body.description,
      stock: req.body.stock,
      brand: req.body.brand,
      category: req.body.category,
      size: req.body.size,
      shade: req.body.shade
    });

    await newCosmetic.save();
    res.status(201).json(newCosmetic);
  } catch (err) {
    res.status(500).json({ error: 'failed to add the cosmetic product' });
  }
});

router.get('/list', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'error fetching the product list' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        stock: req.body.stock,
        brand: req.body.brand,
        category: req.body.category,
        size: req.body.size,
        shade: req.body.shade
      },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: 'failed to update the cosmetic product' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'cosmetic product successfully deleted' });
  } catch (err) {
    res.status(500).json({ error: 'error deleting the cosmetic product' });
  }
});

module.exports = router;
