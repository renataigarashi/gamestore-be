const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  createdAt: { type: Date, required: true, default: Date.now() }
});

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
