require("node:dns/promises").setServers(['1.1.1.1','8.8.8.8']);

const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routers/productRouter');
const  usersRouter = require('./routers/usersRouter');
const  orderRouter = require('./routers/orderRouter');

const app = express();

const port = 3000;
const mongoURI = 'mongodb+srv://cindybarria2_db_user:dsNPSpwyrz42IgtB@cluster0.0izvyag.mongodb.net/dia8';

app.use(express.json());

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Could not connect to MongoDB:', err));

app.use('/product', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
