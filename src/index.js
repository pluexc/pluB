const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authService = require('./src/services/authService');
const paymentService = require('./src/services/paymentService');
const exchangeService = require('./src/services/exchangeService');
const tariffService = require('./src/services/tariffService');
const addonsService = require('./src/services/addonsService');
const profileService = require('./src/services/profileService');
const notificationService = require('./src/services/notificationService');
const adminService = require('./src/services/adminService');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/auth', authService);
app.use('/api/payment', paymentService);
app.use('/api/exchange', exchangeService);
app.use('/api/tariff', tariffService);
app.use('/api/addons', addonsService);
app.use('/api/profile', profileService);
app.use('/api/notifications', notificationService);
app.use('/api/admin', adminService);

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

