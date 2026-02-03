const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    description: String,
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: String,
});

productSchema.pre('save', function() {
    if (this.stock < 0) {
        this.stock = 0;
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;