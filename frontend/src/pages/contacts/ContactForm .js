import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContacts } from '../../context/ContactsContext';
import '../../styles/createContact.scss'; 

const ContactForm = () => {
  const { id } = useParams(); 
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const { handleCreateContact, handleUpdateContact, contacts, successMessage, errorMessage } = useContacts();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const existingContact = contacts.find(contact => contact._id === id);
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [id, contacts]); 

  useEffect(() => {
    console.log('Success Message:', successMessage);
    console.log('Error Message:', errorMessage);
  }, [successMessage, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    try {
      if (id) {
        await handleUpdateContact(id, contact);  // Update the contact
      } else {
        await handleCreateContact(contact);  // Create new contact
      }
      setTimeout(() => {
        setIsSubmitting(false);  
        navigate('/dashboard/contacts'); 
      }, 3000); 
    } catch (error) {
      console.error('Error during form submission:', error);
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="create-contact-page">
      <div className="contact-card">
        <h2>{id ? 'Edit Contact' : 'Create Contact'}</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={contact.name}
              className="form-control"
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={contact.phone}
              className="form-control"
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              required
            />
          </div>
          <button
            onClick={() => navigate('/dashboard/create-contact')}
            className="btn btn-outline-primary me-2"
            disabled={isSubmitting}

          >
            {isSubmitting ? 'Submitting...' : (id ? 'Update ' : 'Submit')}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}              
            className="btn btn-outline-secondary"
          >
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
