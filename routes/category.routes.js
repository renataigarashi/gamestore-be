const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, categoryController.create);
router.get('/findAll', categoryController.findAll);
router.get('/findById/:id', categoryController.findById);
router.put('/update/:id', verifyToken, categoryController.update);
router.delete('/delete/:id', verifyToken, categoryController.deleteById);

module.exports = router;
