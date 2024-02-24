const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectToDatabase = require('./database/database');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const categoryRouter = require('./routes/category.routes');
const cartRouter = require('./routes/cart.routes');
const orderRouter = require('./routes/order.routes');

const cors = require('cors');

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
