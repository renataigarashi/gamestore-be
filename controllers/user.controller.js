const userService = require('../services/user.services');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

const createUser = async (req, res) => {
  try {
    const { name, email, password, image } = req.body;

    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'E-mail already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.createUser({
      name,
      email,
      password: hashedPassword,
      image
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const findUserById = async (req, res) => {
  try {
    const user = await userService.findUserById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .send({ message: 'Usuario nao encontrado, tente novamente' });
    }

    return res.status(200).send(user);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res
        .status(400)
        .send({ message: `ID informado, esta incorreto, tente novamente!` });
    }

    console.log(`erro: ${err.message}`);
    return res
      .status(500)
      .send({ message: `Erro inesperado tente novamente!` });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Verifica se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Gera o token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {
      expiresIn: '24h'
    });
    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await userService.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userProfile = { id: user._id, name: user.name, email: user.email };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserProfile,
  findUserById
};
