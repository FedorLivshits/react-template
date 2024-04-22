import React from 'react';
import { Navigate } from 'react-router-dom';

import { PageLoader } from '../components';
import { useAuthService } from '../hooks';

interface PublicRouteProps extends React.PropsWithChildren {}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated, isInitialized } = useAuthService();

  if (!isInitialized) {
    return <PageLoader />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
