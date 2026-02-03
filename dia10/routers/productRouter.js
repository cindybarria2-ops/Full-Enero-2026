const express = require('express');
const {createProduct, getProduct, deleteProduct,updateProduct } = require('../controllers/productsController');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);
router.get('/:id', getProduct);

module.exports = router;