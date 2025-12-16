const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const ticketRoutes = require('./routes/ticketroute');
const rideRoutes = require('./routes/rideroute');
const productRoutes = require('./routes/productroute');
const userRoutes = require('./routes/userroute');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Database connection (FIXED)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err.message));

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tickets', ticketRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
