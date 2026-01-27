const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routers/usersRouter');

const app = express();
const port = 3000;
const mongoURI = 'mongodb://localhost:27017/mydatabase';

app.use(express.json());

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Could not connect to MongoDB:', err));

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
