const express = require('express');
const router = express.Router();

// Example endpoint for tariff selection
router.post('/select', async (req, res) => {
    // Logic for selecting a tariff
    res.json({ message: 'Tariff selected' });
});

module.exports = router;
