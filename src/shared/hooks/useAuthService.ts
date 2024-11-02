import { AuthContext } from '@shared/context';
import { useContext } from 'react';

export const useAuthService = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthService must be used within an AuthProvider');
  }

  return context;
};
