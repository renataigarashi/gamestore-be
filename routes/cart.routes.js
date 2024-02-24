const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, cartController.create);
router.get('/findAll', cartController.findAll);
router.get('/findById/:id', cartController.findById);
router.put('/update/:id', verifyToken, cartController.update);
router.delete('/delete/:id', verifyToken, cartController.deleteById);

module.exports = router;
