const Pizza = require('../models/pizza.model');

const createPizza = async (pizzaData) => {
  try {
    const pizza = await Pizza.create(pizzaData);
    return pizza;
  } catch (error) {
    throw error;
  }
};

const findAllPizzas = async () => {
  try {
    const pizzas = await Pizza.find();
    return pizzas;
  } catch (error) {
    throw error;
  }
};

const findPizzaById = async (id) => {
  try {
    const pizza = await Pizza.findById(id);
    return pizza;
  } catch (error) {
    throw error;
  }
};

const updatePizza = async (id, pizzaData) => {
  try {
    const updatedPizza = await Pizza.findByIdAndUpdate(id, pizzaData, {
      new: true
    });
    return updatedPizza;
  } catch (error) {
    throw error;
  }
};

const deletePizzaById = async (id) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(id);
    return deletedPizza;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPizza,
  findAllPizzas,
  findPizzaById,
  updatePizza,
  deletePizzaById
};
