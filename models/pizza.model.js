const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  flavor: { type: String, required: true },
  price: { type: Number, required: true }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
