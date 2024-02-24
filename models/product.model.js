const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  barcode: { type: Number, unique: true, required: true },
  categories: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'categories'
      },
      createAt: { type: Date, required: true, default: Date.now() }
    }
  ]
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
