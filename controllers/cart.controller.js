const Cart = require('../models/cart.model');

const cartService = require('../services/cart.service');

const create = async (req, res) => {
  try {
    const body = {
      ...req.body,
      userId: req.userId
    };
    res.status(201).send(await cartService.createCartService(body));
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findAll = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await cartService.findAllCartsService(req.query.limit, req.query.offset)
      );
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findById = async (req, res) => {
  try {
    res.status(200).send(await cartService.findCartByIdService(req.params.id));
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    res
      .status(200)
      .send(await cartService.updateCartService(req.params.id, req.body));
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    res.status(200).send(await cartService.deleteCartService(req.params.id));
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteById
};
