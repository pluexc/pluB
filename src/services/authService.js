const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); // Updated to bcryptjs
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
