const mongoose = require('mongoose');
require('dotenv').config();

// Define the connectDB function
const connectDB = async () => {
  let retries = 5; // Number of retry attempts
  while (retries) {
    try {
      // Connect to MongoDB using the URI from .env
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB Connected...');
      break;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      retries -= 1;
      console.log(`Retrying MongoDB connection, ${retries} attempts remaining...`);
      // Wait for 5 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
      if (retries === 0) {
        console.error('Failed to connect to MongoDB after several attempts. Exiting...');
        process.exit(1);
      }
    }
  }
};

module.exports = connectDB;
