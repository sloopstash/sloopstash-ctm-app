// Validation for Full Name
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/; // Allows only alphabetic characters and spaces
  if (!name.trim()) {
    return 'Name is required.';
  }
  if (name.length < 3) {
    return 'Name must be at least 3 characters long.';
  }
  if (!nameRegex.test(name)) {
    return 'Name cannot contain special characters.';
  }
  return '';
};

// Validation for Phone Number
export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10}$/; // Only 10 digits allowed
  if (!phone.trim()) {
    return 'Phone number is required.';
  }
  if (!phoneRegex.test(phone)) {
    return 'Phone number must be exactly 10 digits.';
  }
  return ''; 
};

// Validation for Email Address
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.trim()) {
    return 'Email is required.';
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  }
  return ''; 
};

// Validation for Password
export const validatePassword = (password) => {
  if (!password.trim()) {
    return 'Password is required.';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters long.';
  }
  return ''; 
};

