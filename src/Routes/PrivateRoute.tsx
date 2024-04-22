import React from 'react';
import { Navigate } from 'react-router-dom';
import { PageLoader } from '../components';
import { useAuthService } from '../hooks';

interface PrivateRouteProps extends React.PropsWithChildren {}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, isInitialized } = useAuthService();

  if (!isInitialized) {
    return <PageLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
