const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Define the dashboard route
router.get('/', dashboardController.getDashboard);

module.exports = router;
