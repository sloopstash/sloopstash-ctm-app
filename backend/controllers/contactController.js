const mongoose = require('mongoose');
const Contact = require('../models/contactModel');

// Create a new contact
exports.createContact = async (req, res) => {
    const { name, phone } = req.body;
    const userId = req.user.id;
    
    try {
        const contact = await Contact.create({ name, phone, userId });
        res.status(201).json({ message: 'Contact created successfully', contact });
    } catch (error) {
        res.status(500).json({ message: 'Error creating contact', error });
    }
};

// List a contacts
exports.getContacts = async (req, res) => {
    try {
      const userId = req.user.id; 
      const userObjectId = new mongoose.Types.ObjectId(userId);
      const contacts = await Contact.find({ userId: userObjectId });
      if (contacts.length === 0) {
        return res.status(404).json({ message: 'No contacts found for this user.' });
      }
      res.status(200).json({ contacts });
    } catch (err) {
      console.error("Error fetching contacts:", err);
      res.status(500).json({ message: 'Error fetching contacts' });
    }
};
  
// Update a contact
exports.updateContact = async (req, res) => {
    const { id } = req.params; 
    const { name, phone } = req.body;
    const userId = req.user.id;
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: id, userId },
            { name, phone },
            { new: true }
        );
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found or unauthorized.' });
        }
        res.json({ message: 'Contact updated successfully', contact });
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ message: 'Error updating contact', error });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    const { id } = req.params; 
    const userId = req.user.id;
    try {
        const contact = await Contact.findOneAndDelete({ _id: id, userId });
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found or unauthorized.' });
        }
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ message: 'Error deleting contact', error });
    }
};