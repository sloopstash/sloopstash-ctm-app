export const CONTACTS = {
  NOT_FOUND: 'No contacts found. Please create a contact to get started.',
  NETWORK_ERROR: 'Network error or unknown issue while fetching contacts.',
  SERVER_ERROR: 'Internal server error while fetching contacts. Please try again later.',
  CREATE_ERROR: 'Failed to create contact.',
  UPDATE_ERROR: 'Failed to update contact.',
  DELETE_ERROR: 'Failed to delete contact.',
  INVALID_ID: 'Contact not found. Please check the ID.',
  INVALID_UPDATE: 'Invalid data provided for updating the contact.',
  DELETE_SERVER_ERROR: 'Internal server error while deleting contact. Please try again later.',
  UPDATE_SERVER_ERROR: 'Internal server error while updating contact. Please try again later.',
  UPDATE_INVALID_DATA: 'Invalid data provided for updating the contact.'
};

export const NETWORK_ERRORS = {
  UNKNOWN: 'Network error or unknown issue.',
  TIMEOUT: 'Request timed out. Please try again later.'
};

export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid credentials. Please try again.',
  SESSION_EXPIRED: 'Session expired. Please log in again.'
};

export const API_ERRORS = {
  RESOURCE_NOT_FOUND: 'Error: Resource not found',
  INTERNAL_SERVER_ERROR: 'Error: Internal Server Error',
  UNAUTHORIZED: 'Error: Unauthorized, please log in',
  NETWORK_ERROR: 'Network error: No response from the server',
  REQUEST_ERROR: 'Error setting up request: ',
  GENERIC_ERROR: 'Error: Something went wrong',
};
