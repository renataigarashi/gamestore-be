const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.get('/verify-token', verifyToken, userController.getUserProfile);
router.get('/findById/:id', userController.findUserById);

module.exports = router;
