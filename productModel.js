


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    minlength: 2,  
    maxlength: 30  
  },
  price: {
    type: Number,
    required: true,
    min: 0.01, 
    max: 25 
  },
  description: {
    type: String,
    required: true,
    minlength: 10,  
    maxlength: 300  
  },
  stock: {
    type: Number,
    required: true,
    min: 0,  // stock can't be negative
    max: 200000  
  },
  brand: {
    type: String,
    required: true,
    trim: true  //  remove  spaces
  },
  category: {
    type: String,
    required: true,
    enum: ['skincare', 'makeup', 'haircare', 'perfume']  
  },
  size: {
    type: String,
    match: /^[0-9]+(ml|g)$/,  
    required: false  
  },
  shade: {
    type: String,
    match: /^[A-Za-z\s]+$/,  
    required: false  
  }
});

const Product = mongoose.model('CosmeticProduct', productSchema);
module.exports = Product;
