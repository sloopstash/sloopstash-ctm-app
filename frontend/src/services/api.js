import axiosInstance from './axiosInstance';

// General POST request function
export const apiPost = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;  // Return the response data
  } catch (error) {
    console.error('API POST error:', error.response || error.message);
    throw error;  // Rethrow the error for further handling
  }
};

// General GET request function
export const apiGet = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;  // Return the response data
  } catch (error) {
    console.error('API GET error:', error.response || error.message);
    throw error;  // Rethrow the error for further handling
  }
};

// PUT request function
export const apiPut = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error('API PUT error:', error.response || error.message);
    throw error;  // Rethrow the error for further handling
  }
};

// DELETE request function
export const apiDelete = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;  // Return the data from the response
  } catch (error) {
    console.error('API DELETE error:', error.response || error.message);
    throw error;  // Rethrow the error for further handling
  }
};
