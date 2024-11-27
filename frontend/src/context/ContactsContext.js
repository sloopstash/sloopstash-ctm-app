import React, { createContext, useState, useContext, useCallback } from 'react';
import { getContacts, createContact, deleteContact, updateContact } from '../services/contactsService';

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Memoizing fetchContacts to prevent unnecessary re-renders
  const fetchContacts = useCallback(async () => {
    try {
      const data = await getContacts();
      setContacts((prevContacts) => {
        if (JSON.stringify(prevContacts) !== JSON.stringify(data)) {
          return data;
        }
        return prevContacts;  // Avoid setting the same data
      });
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message || 'Error fetching contacts.');
    }
  }, []);  
  
  
  const handleCreateContact = async (contactData) => {
    try {
      const response = await createContact(contactData);
      setSuccessMessage(response.message);  
      await fetchContacts(); 
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage(error.message || 'Error creating contact.');
      setTimeout(() => setErrorMessage(''), 3000);  
    }
  };

  const handleUpdateContact = async (contactId, updatedData) => {
    try {
      const response = await updateContact(contactId, updatedData);
      setSuccessMessage(response.message); 
      await fetchContacts();  

      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setErrorMessage(error.message || 'Error updating contact.');
      setTimeout(() => setErrorMessage(''), 3000); 
    }
  };

  // Delete a contact
  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId);
      setContacts(contacts.filter((contact) => contact._id !== contactId));
      setSuccessMessage('Contact deleted successfully.');
      setTimeout(() => setSuccessMessage(''), 3000); 
    } catch (error) {
      setErrorMessage(error.message || 'Error deleting contact.');
      setTimeout(() => setErrorMessage(''), 3000); 
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        errorMessage,
        successMessage,
        fetchContacts,
        handleCreateContact,
        handleUpdateContact,
        handleDeleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
