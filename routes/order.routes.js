const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, orderController.create);
router.get('/findAll', orderController.findAll);
router.get('/findById/:id', orderController.findById);
router.put('/update/:id', verifyToken, orderController.update);
router.delete('/delete/:id', verifyToken, orderController.deleteById);

module.exports = router;
