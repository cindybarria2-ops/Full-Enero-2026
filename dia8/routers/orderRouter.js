const express = require('express');
const {createOrder, getOrder, deleteOrder,updateOrder } = require('../controllers/ordersController');

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrder);
router.delete('/:id', deleteOrder);
router.put('/:id', updateOrder);
router.get('/:id', getOrder);

module.exports = router;