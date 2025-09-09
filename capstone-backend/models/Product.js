const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String, // Cloudinary image URL
  category: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;