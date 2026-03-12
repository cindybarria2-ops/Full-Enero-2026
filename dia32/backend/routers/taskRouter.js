const express = require('express');
const { createTask, getTask, deleteTask, updateTask } = require('../controllers/tasksController');


const router = express.Router();

router.post('/',createTask );
router.get('/', getTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/:id', getTask);
module.exports = router;