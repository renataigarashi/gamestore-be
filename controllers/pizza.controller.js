const pizzaService = require('../services/pizza.service');
const requireFields = ['flavor', 'price'];

const create = async (req, res) => {
  try {
    const pizzaData = req.body;
    if (Object.keys(pizzaData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !pizzaData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const pizza = await pizzaService.createPizza(pizzaData);
    res.status(201).send(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findAll = async (req, res) => {
  try {
    const pizzas = await pizzaService.findAllPizzas();
    res.status(200).send(pizzas);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const pizza = await pizzaService.findPizzaById(id);
    if (!pizza) {
      return res.status(404).send({ message: `Pizza with ID ${id} not found` });
    }
    res.status(200).send(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const pizzaData = req.body;
    if (Object.keys(pizzaData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !pizzaData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const updatedPizza = await pizzaService.updatePizza(id, pizzaData);
    if (!updatedPizza) {
      return res.status(404).send({ message: `Pizza with ID ${id} not found` });
    }

    res.status(200).send(updatedPizza);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPizza = await pizzaService.deletePizzaById(id);
    if (!deletedPizza) {
      return res.status(404).send({ message: `Pizza with ID ${id} not found` });
    }
    res.status(200).send({ message: 'Pizza deleted successfully' });
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
