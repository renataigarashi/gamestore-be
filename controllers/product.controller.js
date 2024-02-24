const productService = require('../services/product.service');
const requireFields = ['name', 'description', 'price', 'barcode'];

const create = async (req, res) => {
  try {
    const productData = req.body;
    if (Object.keys(productData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !productData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const product = await productService.createProduct(productData);
    res.status(201).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findAll = async (req, res) => {
  try {
    const product = await productService.findAllProdutcs();
    res.status(200).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.findProductById(id);
    if (!product) {
      return res
        .status(404)
        .send({ message: `Product with ID ${id} not found` });
    }
    res.status(200).send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = req.body;
    if (Object.keys(productData).length === 0) {
      return res.status(400).send({ message: 'Invalid body request' });
    }

    const missingFields = requireFields.filter((field) => !productData[field]);
    if (missingFields.length > 0) {
      return res.status(400).send({
        message: `Please fill the field(s): ${missingFields.join(', ')}`
      });
    }

    const updatedProduct = await productService.updateProduct(id, productData);
    if (!updatedProduct) {
      return res
        .status(404)
        .send({ message: `Product with ID ${id} not found` });
    }

    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res
        .status(404)
        .send({ message: `Product with ID ${id} not found` });
    }
    res.status(200).send({ message: 'Product deleted successfully' });
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
