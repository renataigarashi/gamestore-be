const Order = require('../models/order.model');

const findOrderByIdService = (id) => {
  return Order.findById(id);
};

const findAllOrdersService = (limit, offset) => {
  return Order.find().limit(limit).skip(offset);
};

const createOrderService = (body) => {
  return Order.create(body);
};

const updateOrderService = (id, body) => {
  return Order.findByIdAndUpdate(id, body, { returnDocument: 'after' });
};

const deleteOrderService = (id) => {
  return Order.findByIdAndRemove(id);
};

module.exports = {
  findOrderByIdService,
  findAllOrdersService,
  createOrderService,
  updateOrderService,
  deleteOrderService
};
