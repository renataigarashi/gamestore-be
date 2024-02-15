const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectToDatabase = require('./database/database');
const pizzaRouter = require('./routes/pizza.routes');
const userRouter = require('./routes/user.routes');
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');

connectToDatabase();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/pizza', pizzaRouter);

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
