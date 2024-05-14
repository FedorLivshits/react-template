import { useContext } from 'react';
import { AuthContext } from '../context';

export const useAuthService = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthService must be used within an AuthProvider');
  }

  return context;
};
