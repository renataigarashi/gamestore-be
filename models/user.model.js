const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  image: { type: String },
  address: [
    {
      street: { type: String, required: true },
      number: { type: Number, required: true },
      complement: { type: String, required: false },
      ZIP: { type: String, required: true },
      createdAt: { type: Date, required: true, default: Date.now() }
    }
  ],
  fav_products: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: 'produtos'
      },
      createdAt: { type: Date, default: Date.now() }
    }
  ],
  createdAt: { type: Date, required: true, default: Date.now() },
  admin: { type: Boolean, required: true, default: false }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
