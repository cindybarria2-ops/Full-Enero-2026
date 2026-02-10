const User = require('../models/users');
/* const bcrypt = require('bcrypt');
 */
async function registerUser(req, res) {
const {username , password} = req.body;
try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        password: hashedPassword
    });
    await newUser.save();
    res.status(201).send('User created');
} catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
}
}

async function loginUser(req, res) {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

module.exports = { loginUser, registerUser };