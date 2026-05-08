// Controller for authentication with validation functions

// Types for validation results
interface ValidationResult {
  isValid: boolean;
  message: string;
}

interface LoginValidationResult {
  success: boolean;
  message: string;
  field?: 'username' | 'password';
  data?: {
    username: string;
    password: string;
  };
}

// Validation helper functions for username
const validateUsername = (username: string): ValidationResult => {
  // Check if username is empty
  if (!username || username.trim() === '') {
    return { isValid: false, message: 'Username wajib diisi' };
  }

  // Check for spaces
  if (/\s/.test(username)) {
    return { isValid: false, message: 'Username tidak boleh mengandung spasi' };
  }

  // Check for uppercase letters (only lowercase allowed)
  if (/[A-Z]/.test(username)) {
    return { isValid: false, message: 'Username tidak boleh huruf besar' };
  }

  // Check for special characters (only lowercase letters and numbers allowed)
  if (!/^[a-z0-9]+$/.test(username)) {
    return { isValid: false, message: 'Username hanya boleh huruf kecil dan angka' };
  }

  // Check minimum length
  if (username.length < 3) {
    return { isValid: false, message: 'Username minimal 3 karakter' };
  }

  // Check maximum length
  if (username.length > 20) {
    return { isValid: false, message: 'Username terlalu panjang' };
  }

  return { isValid: true, message: 'Username valid' };
};

// Validation helper functions for password
const validatePassword = (password: string): ValidationResult => {
  // Check if password is empty
  if (!password || password.trim() === '') {
    return { isValid: false, message: 'Password wajib diisi' };
  }

  // Check for spaces
  if (/\s/.test(password)) {
    return { isValid: false, message: 'Password tidak boleh mengandung spasi' };
  }

  // Check for letters (only numbers allowed)
  if (/[a-zA-Z]/.test(password)) {
    return { isValid: false, message: 'Password hanya boleh angka' };
  }

  // Check for special characters (only numbers allowed)
  if (!/^[0-9]+$/.test(password)) {
    return { isValid: false, message: 'Password hanya boleh angka' };
  }

  // Check minimum length
  if (password.length < 6) {
    return { isValid: false, message: 'Password minimal 6 karakter' };
  }

  // Check maximum length
  if (password.length > 64) {
    return { isValid: false, message: 'Password terlalu panjang' };
  }

  return { isValid: true, message: 'Password valid' };
};

// Login validation controller
const validateLoginInput = (username: string, password: string): LoginValidationResult => {
  // Validate username
  const usernameValidation = validateUsername(username);
  if (!usernameValidation.isValid) {
    return {
      success: false,
      message: usernameValidation.message,
      field: 'username'
    };
  }

  // Validate password
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return {
      success: false,
      message: passwordValidation.message,
      field: 'password'
    };
  }

  // If all validations pass
  return {
    success: true,
    message: 'All inputs are valid',
    data: { username, password }
  };
};

// Export functions for use in API routes
export {
  validateUsername,
  validatePassword,
  validateLoginInput
};

export type { ValidationResult, LoginValidationResult };
