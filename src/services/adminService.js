const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Tariff = require('../models/Tariff');
const Addon = require('../models/Addon');

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all tariffs
router.get('/tariffs', async (req, res) => {
    try {
        const tariffs = await Tariff.find();
        res.json(tariffs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all add-ons
router.get('/addons', async (req, res) => {
    try {
        const addons = await Addon.find();
        res.json(addons);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
