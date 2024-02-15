const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.error(`Error connection database: ${err}`);
    });
}

module.exports = connectToDatabase;
