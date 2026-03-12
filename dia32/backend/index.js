require("node:dns/promises").setServers(['1.1.1.1','8.8.8.8']);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRouter = require('./routers/taskRouter');

const app = express();

const port = 3000;
const mongoURI = 'mongodb+srv://cindybarria2_db_user:dsNPSpwyrz42IgtB@cluster0.0izvyag.mongodb.net/dia32';

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Could not connect to MongoDB:', err));

app.use('/tasks', taskRouter);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
