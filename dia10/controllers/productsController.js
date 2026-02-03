const Product = require('../models/product');

async function createProduct(req, res) {
   /*  try { */
        const { name, description, price, stock, category } = req.body;
        const newProduct = new Product({ name, description, price, stock, category });
        await newProduct.save();
        res.status(201).json(newProduct);
   /*  } catch (error) {
        res.status(500).json({ message: 'Error creating Product', error });
    } */
}

async function getProduct(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Products', error });
    }
}
async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Product', error });
    }
}
async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error updating Product', error });
    }
}

module.exports = { createProduct, getProduct, deleteProduct, updateProduct };