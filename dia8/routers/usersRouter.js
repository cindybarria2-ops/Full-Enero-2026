const express = require('express');
const {createUsers, getUsers, deleteUsers,updateUsers } = require('../controllers/usersController');

const router = express.Router();

router.post('/', createUsers);
router.get('/', getUsers);
router.delete('/:id', deleteUsers);
router.put('/:id', updateUsers);
router.get('/:id', getUsers);

module.exports = router;