const Product = require('../models/product.model');

const createProduct = async (productData) => {
  try {
    const product = await Product.create(productData);
    return product;
  } catch (error) {
    throw error;
  }
};

const findAllProdutcs = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
};

const findProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id, productData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
      new: true
    });
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    return deleteProduct;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  findAllProdutcs,
  findProductById,
  updateProduct,
  deleteProduct
};
