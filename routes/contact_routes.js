const express = require('express');
const contactController = require('../controller/contact_controller');
const verifyToken = require('../helper/middlewares/auth_middleware'); 

const router = express.Router();

// Protect routes with JWT token verification
router.post('/create', verifyToken, contactController.createContact);
router.get('/', verifyToken, contactController.getContacts);
router.put('/update/:id', verifyToken, contactController.updateContact);
router.delete('/delete/:id', verifyToken, contactController.deleteContact);

module.exports = router;
