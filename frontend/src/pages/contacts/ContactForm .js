import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContacts } from '../../context/ContactsContext';
import { validateName, validatePhone } from '../../utils/validation';
import '../../styles/createContact.scss'; 

const ContactForm = () => {
  const { id } = useParams(); 
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [error, setError] = useState({ name: '', phone: '' }); 
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

  const validateForm = () => {
    let formValid = true;
    const newError = { name: '', phone: '' };
    const nameError = validateName(contact.name);
    if (nameError) {
      newError.name = nameError;
      formValid = false;
    }
    const phoneError = validatePhone(contact.phone);
    if (phoneError) {
      newError.phone = phoneError;
      formValid = false;
    }
    setError(newError);
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true); 
    try {
      if (id) {
        // Updating existing contact
        await handleUpdateContact(id, contact);
      } else {
        // Creating new contact
        await handleCreateContact(contact);
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
    <div className="contact-form-container">
      <div className="contact-card">
        <h2 className="form-title">{id ? 'Edit Contact' : 'Create Contact'}</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={contact.name}
              className="form-control"
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
            {error.name && <div className="error-message">{error.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={contact.phone}
              className="form-control"
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
            {error.phone && <div className="error-message">{error.phone}</div>}
          </div>
          <div className="buttonSection">
            <button
              type="submit"
              className="btn btn-custom"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : (id ? 'Update Contact' : 'Create Contact')}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );  
};

export default ContactForm;
