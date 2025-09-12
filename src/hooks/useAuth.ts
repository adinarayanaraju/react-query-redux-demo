import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { loginApi, logoutApi, updateUserProfileApi } from '../api/auth';
import type { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useLocalStorage<string | null>('authToken', null);

  useEffect(() => {
    if (token) {
      // In a real app, you'd verify the token with the backend here
      // For this mock, we'll just assume the token is valid
      // and refetch user data if needed.
      // For now, we'll just set a dummy user if a token exists.
      setUser({ id: 'u1', name: 'John Doe', email: 'john.doe@example.com', token: token });
    }
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const loggedInUser = await loginApi(username, password);
      setUser(loggedInUser);
      setToken(loggedInUser.token);
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw to be caught by the component
    }
  };

  const logout = async () => {
    await logoutApi();
    setUser(null);
    setToken(null);
  };

  const updateUser = async (name: string, email: string) => {
    try {
      const updatedUser = await updateUserProfileApi(name, email);
      setUser(updatedUser);
    } catch (error) {
      console.error('Update failed:', error);
      throw error;
    }
  };

  const isAuthenticated = !!token;

  return { user, token, login, logout, updateUser, isAuthenticated };
}