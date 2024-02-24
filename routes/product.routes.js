const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, productController.create);
router.get('/findAll', productController.findAll);
router.get('/findById/:id', productController.findById);
router.put('/update/:id', verifyToken, productController.update);
router.delete('/delete/:id', verifyToken, productController.deleteById);

module.exports = router;
