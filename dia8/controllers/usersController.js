const Users = require('../models/users');

async function createUsers(req, res) {
        const { name, email, password, is_admin } = req.body;
        const newUsers = new Users({ name, email, password, is_admin });
        await newUsers.save();
        res.status(201).json(newUsers);
}

async function getUsers(req, res) {
    try {
        const Userss = await Users.find();
        res.status(200).json(Userss);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Userss', error });
    }
}
async function deleteUsers(req, res) {
    try {
        const { id } = req.params;
        const Users = await Users.findByIdAndDelete(id);
        if (!Users) {
            return res.status(404).json({ message: 'Users not found' });
        }
        res.status(200).json({ message: 'Users deleted successfully', Users });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting Users', error });
    }
}
async function updateUsers(req, res) {
    try {
        const { id } = req.params;
        const Users = await Users.findByIdAndUpdate(id, req.body, { new: true });
        if (!Users) {
            return res.status(404).json({ message: 'Users not found' });
        }
        res.status(200).json({ message: 'Users updated successfully', Users });
    } catch (error) {
        res.status(500).json({ message: 'Error updating Users', error });
    }
}

module.exports = { createUsers, getUsers, deleteUsers, updateUsers };