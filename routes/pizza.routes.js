const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizza.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, pizzaController.create);
router.get('/findAll', pizzaController.findAll);
router.get('/findById/:id', pizzaController.findById);
router.put('/update/:id', verifyToken, pizzaController.update);
router.delete('/delete/:id', verifyToken, pizzaController.deleteById);

module.exports = router;
