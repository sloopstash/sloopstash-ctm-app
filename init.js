const express = require('express');
const cors = require('cors');
const path = require('path');
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

// Define routes for API
app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

// Serve React build files
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the React app (built version)
  app.use(express.static(path.join(__dirname, 'view/build')));

  // The "catch-all" handler: when a request doesn't match any API routes, serve the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/build', 'index.html'));
  });
}

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
