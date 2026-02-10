const express = require('express');
const mongoose = require('mongoose');
/* const bcrypt = require('bcrypt'); */

const cors = require('cors');
const dotenv = require('dotenv');

const usersRouter = require('./routers/usersRouter');

dotenv.config();


const app = express();
const port = 5000;
//const mongoURI = 'mongodb+srv://cindybarria2_db_user:dsNPSpwyrz42IgtB@cluster0.0izvyag.mongodb.net/dia14';

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Could not connect to MongoDB:', err));

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
