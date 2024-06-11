const express = require('express');
const router = express.Router();

// Example endpoint for managing add-ons
router.post('/add', async (req, res) => {
    // Logic for adding an add-on
    res.json({ message: 'Add-on added' });
});

module.exports = router;
