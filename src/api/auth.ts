import type { User } from '../types';

// Mock user database
let mockUser: User = {
  id: 'u1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
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

// Fake update user profile API
export const updateUserProfileApi = (name: string, email: string, phone: string): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockUser = { ...mockUser, name, email, phone };
      resolve(mockUser);
    }, 600);
  });
};