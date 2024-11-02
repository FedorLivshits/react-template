import { PageLoader } from '@shared/components';
import { useAuthService } from '@shared/hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

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
