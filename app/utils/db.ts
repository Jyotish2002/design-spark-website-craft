// This is a simple in-memory database for demonstration
// In production, use a real database like MongoDB, PostgreSQL, etc.

interface User {
  email: string;
  password: string;
  userType: 'student' | 'counselor';
  isVerified: boolean;
}

// In-memory database
const users = new Map<string, User>();

// Check if email exists
export function emailExists(email: string): boolean {
  return users.has(email);
}

// Check if email exists for specific user type
export function emailExistsForUserType(email: string, userType: 'student' | 'counselor'): boolean {
  const user = users.get(email);
  return user !== undefined && user.userType === userType;
}

// Create new user
export function createUser(email: string, password: string, userType: 'student' | 'counselor'): void {
  users.set(email, {
    email,
    password,
    userType,
    isVerified: false,
  });
}

// Verify user
export function verifyUser(email: string): void {
  const user = users.get(email);
  if (user) {
    user.isVerified = true;
  }
}

// Get user
export function getUser(email: string): User | undefined {
  return users.get(email);
}

// Check if user is verified
export function isUserVerified(email: string): boolean {
  const user = users.get(email);
  return user !== undefined && user.isVerified;
}

// Validate login
export function validateLogin(email: string, password: string, userType: 'student' | 'counselor'): boolean {
  const user = users.get(email);
  return user !== undefined && 
         user.password === password && 
         user.userType === userType && 
         user.isVerified;
} 