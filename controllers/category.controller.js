const Category = require('../models/category.model');

const categoryService = require('../services/category.service');
const requireFields = ['name'];

const create = async (req, res) => {
  try {
    const categoryData = req.body;
    if (Object.keys(categoryData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !categoryData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const category = await categoryService.createCategory(categoryData);
    res.status(201).send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findAll = async (req, res) => {
  try {
    const category = await categoryService.findAllCategory();
    res.status(200).send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await categoryService.findCategoryById(id);
    if (!category) {
      return res
        .status(404)
        .send({ message: `Category with ID ${id} not found` });
    }
    res.status(200).send(category);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const categoryData = req.body;
    if (Object.keys(categoryData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !categoryData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const updatedCategory = await categoryService.updateCategory(
      id,
      categoryData
    );
    if (!updatedCategory) {
      return res
        .status(404)
        .send({ message: `Category with ID ${id} not found` });
    }

    res.status(200).send(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCategory = await categoryService.deleteCategory(id);
    if (!deletedCategory) {
      return res
        .status(404)
        .send({ message: `Category with ID ${id} not found` });
    }
    res.status(200).send({ message: 'Category deleted successfully' });
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
