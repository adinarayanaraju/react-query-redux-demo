import type { User } from '../types';

// Mock user database
const mockUser: User = {
  id: 'u1',
  name: 'John Doe',
  token: 'fake-jwt-token-12345'
};

// Fake login API
export const loginApi = (username: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        resolve(mockUser);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 800);
  });
};

// Fake logout API
export const logoutApi = (): Promise<{ message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Logged out successfully' });
    }, 500);
  });
};


// Points covered:

// Fake login & logout with token

// Simulates API delay with setTimeout

// Errors for invalid credentials