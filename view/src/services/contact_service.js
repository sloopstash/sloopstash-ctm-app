import axiosInstance from './axios_instance';
import { CONTACTS, NETWORK_ERRORS } from '../utils/messages';

// Get all contacts for the logged-in user
export const getContacts = async () => {
  try {
    const response = await axiosInstance.get('/contacts');
    return response.data.contacts; 
  } catch (error) {
    console.error("Error fetching contacts:", error.response || error.message);
    if (error.response && error.response.status === 404) {
      throw new Error(CONTACTS.NOT_FOUND);
    } else if (error.response && error.response.status === 500) {
      throw new Error(CONTACTS.SERVER_ERROR);
    } else {
      throw new Error(NETWORK_ERRORS.UNKNOWN);
    }
  }
};

// Create a contact
export const createContact = async (contactData) => {
  try {
    const response = await axiosInstance.post('/contacts/create', contactData);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error.response || error.message);
    throw new Error(CONTACTS.CREATE_ERROR);
  }
};

// Update a contact by ID
export const updateContact = async (contactId, contactData) => {
  try {
    const response = await axiosInstance.put(`/contacts/update/${contactId}`, contactData);
    return response.data; 
  } catch (error) {
    console.error("Error updating contact:", error.response || error.message);
    if (error.response && error.response.status === 404) {
      throw new Error(CONTACTS.INVALID_ID);
    } else if (error.response && error.response.status === 400) {
      throw new Error(CONTACTS.UPDATE_INVALID_DATA);
    } else if (error.response && error.response.status === 500) {
      throw new Error(CONTACTS.UPDATE_SERVER_ERROR);
    } else {
      throw new Error(NETWORK_ERRORS.UNKNOWN);
    }
  }
};

// Delete a contact by ID
export const deleteContact = async (contactId) => {
  try {
    const response = await axiosInstance.delete(`/contacts/delete/${contactId}`);
    return response.data; 
  } catch (error) {
    console.error("Error deleting contact:", error.response || error.message);
    if (error.response && error.response.status === 404) {
      throw new Error(CONTACTS.INVALID_ID);
    } else if (error.response && error.response.status === 500) {
      throw new Error(CONTACTS.DELETE_SERVER_ERROR);
    } else {
      throw new Error(NETWORK_ERRORS.UNKNOWN);
    }
  }
};
