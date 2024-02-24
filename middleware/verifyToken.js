const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }
  jwt.verify(token.replace('Bearer ', ''), secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyToken;
