const express = require('express');
const contactController = require('../controllers/contactController');
const verifyToken = require('../middlewares/authMiddleware'); 

const router = express.Router();

// Protect routes with JWT token verification
router.post('/create', verifyToken, contactController.createContact);
router.get('/', verifyToken, contactController.getContacts);
router.put('/update/:id', verifyToken, contactController.updateContact);
router.delete('/delete/:id', verifyToken, contactController.deleteContact);

module.exports = router;
