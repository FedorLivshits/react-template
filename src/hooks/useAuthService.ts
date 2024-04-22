import { useEffect, useState } from 'react';

export const useAuthService = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isInitialized, signIn, logout };
};
