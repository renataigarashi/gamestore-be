const User = require('../models/user.model');

const createUser = (userData) => {
  return User.create(userData);
};

const findUserById = async (userId) => {
  return User.findById(userId);
};

const findUserByEmail = (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail
};
