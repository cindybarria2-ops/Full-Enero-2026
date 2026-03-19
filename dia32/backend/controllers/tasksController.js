const Task = require('../models/task');

async function createTask(req, res) {
        const { title, description, completed } = req.body;
        const newTask = new Task({ title, description, completed });
        await newTask.save();
        res.status(201).json(newTask);
}

async function getTask(req, res) {
    try {
        const Tasks = await Task.find();
        res.status(200).json(Tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Tasks', error });
    }
}
async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully', deletedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Task', error });
    }
}

async function updateTask(req, res) {
    try {
        const { id } = req.params;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating Task', error });
    }
}

module.exports = { createTask, getTask, deleteTask, updateTask };