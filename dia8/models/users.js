const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
});

const bcrypt = require('bcryptjs');

userSchema.pre('save', async function() {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;