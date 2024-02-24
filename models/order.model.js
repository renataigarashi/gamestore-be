const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users'
  },
  isFinished: { type: Boolean, required: true }
});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;
