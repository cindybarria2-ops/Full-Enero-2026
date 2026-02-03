const Order = require('../models/order');

async function createOrder(req, res) {
        const { user, products, total, status } = req.body;
        const newOrder = new Order({ user, products, total, status });
        await newOrder.save();
        res.status(201).json(newOrder);
}

async function getOrder(req, res) {
    try {
        const Orders = await Order.find();
        res.status(200).json(Orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Orders', error });
    }
}
async function deleteOrder(req, res) {
    try {
        const { id } = req.params;
        const Order = await Order.findByIdAndDelete(id);
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully', Order });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Order', error });
    }
}
async function updateOrder(req, res) {
    try {
        const { id } = req.params;
        const Order = await Order.findByIdAndUpdate(id, req.body, { new: true });
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order updated successfully', Order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating Order', error });
    }
}

module.exports = { createOrder, getOrder, deleteOrder, updateOrder };