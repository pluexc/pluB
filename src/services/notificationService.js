const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');

// Get notifications
router.get('/:userId', async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.userId });
        res.json(notifications);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Create notification
router.post('/', async (req, res) => {
    const notification = new Notification(req.body);
    try {
        const newNotification = await notification.save();
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
