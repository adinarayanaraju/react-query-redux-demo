import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

type AuthUser = { username: string };

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useLocalStorage<string | null>('authToken', null);

  const login = async (username: string, password: string) => {
    // Fake API call
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        const fakeToken = 'FAKE-JWT-TOKEN-12345';
        setUser({ username });
        setToken(fakeToken);
        resolve(true);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!token;

  return { user, token, login, logout, isAuthenticated };
}

//Points: fake API, JWT token in localStorage, TypeScript typed.