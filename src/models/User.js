const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Updated to bcryptjs

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
