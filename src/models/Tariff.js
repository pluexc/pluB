const mongoose = require('mongoose');

const tariffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    features: { type: [String], required: true },
});

module.exports = mongoose.model('Tariff', tariffSchema);
