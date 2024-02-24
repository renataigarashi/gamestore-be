const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  products: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'products'
      },
      quantity: { type: Number, required: true }
    }
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  totalPrice: { type: Number, required: true },
  shipping: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'users' }
});

const Cart = mongoose.model('carts', CartSchema);

module.exports = Cart;
