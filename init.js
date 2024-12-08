const express = require('express');
const cors = require('cors');
require('dotenv').config(); 

const authRoutes = require('./controller/routes/auth_routes');
const contactRoutes = require('./controller/routes/contact_routes');
const connectDB = require('./conf/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the common module
connectDB();

// Define your routes
app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Service is healthy'
  });
});

// Defaulting to 2000 and '0.0.0.0' if not provided
const PORT = process.env.PORT || 2000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
});
