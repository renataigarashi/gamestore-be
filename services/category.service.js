const Category = require('../models/category.model');

const findCategoryById = (id) => {
  return Category.findById(id);
};

const findAllCategory = (limit, offset) => {
  return Category.find().limit(limit).skip(offset);
};

const createCategory = (body) => {
  return Category.create(body);
};

const updateCategory = (id, body) => {
  return Category.findByIdAndUpdate(id, body, { returnDocument: 'after' });
};

const deleteCategory = (id) => {
  return Category.findByIdAndRemove(id);
};

module.exports = {
  findCategoryById,
  findAllCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
