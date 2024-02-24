const Cart = require('../models/cart.model');

const findCartByIdService = (id) => {
  return Cart.findById(id);
};

const findAllCartsService = (limit, offset) => {
  return Cart.find().limit(limit).skip(offset);
};

const createCartService = (body) => {
  return Cart.create(body);
};

const updateCartService = (id, body) => {
  return Cart.findByIdAndUpdate(id, body, { returnDocument: 'after' });
};

const deleteCartService = (id) => {
  return Cart.findByIdAndRemove(id);
};

module.exports = {
  findCartByIdService,
  findAllCartsService,
  createCartService,
  updateCartService,
  deleteCartService
};
