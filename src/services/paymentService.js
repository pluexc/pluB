const express = require('express');
const router = express.Router();
const walletService = require('./walletService');

router.post('/pay', async (req, res) => {
    const { from, to, amount, privateKey } = req.body;
    try {
        const transaction = await walletService.transfer(from, to, amount, privateKey);
        res.json(transaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
