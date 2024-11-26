const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const authRoutes = require('./routes/authRoutes');  
const contactRoutes = require('./routes/contactRoutes');  

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes); 
app.use('/api/contacts', contactRoutes);  

// Health check route
app.get('/health', (req, res) => res.send('Healthy'));

// Start the server
app.listen(2000, () => {
  console.log('Server is running on port 2000');
});
