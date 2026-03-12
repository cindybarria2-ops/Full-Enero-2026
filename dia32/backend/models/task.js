const mongoose = require('mongoose');

const Taskchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', Taskchema);

module.exports = Task;