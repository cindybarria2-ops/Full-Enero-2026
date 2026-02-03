const mongoose = require('mongoose');

const Orderchema = new mongoose.Schema({
    user:{ type: String, required: true },
    products: { type: String, required: true },
    total: { type: Number, required: true, min: 0 },
    status: { type: String, required: true },
});



const Order = mongoose.model('Order', Orderchema);

module.exports = Order;