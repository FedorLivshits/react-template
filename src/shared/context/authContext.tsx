import React, { createContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  isInitialized: boolean;
  signIn: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  useEffect(() => {
    const verifyUserSession = async () => {
      const token = localStorage.getItem('userToken');
      setIsAuthenticated(!!token);
      setIsInitialized(true);
    };

    verifyUserSession();
  }, []);

  const signIn = () => {
    setIsAuthLoading(true);
    localStorage.setItem('userToken', 'xxx');
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsAuthLoading(false);
    }, 1000);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setIsAuthenticated(false);
    location.reload();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthLoading, isAuthenticated, isInitialized, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
