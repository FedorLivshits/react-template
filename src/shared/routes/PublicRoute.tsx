import { PageLoader } from '@shared/components';
import { useAuthService } from '@shared/hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

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
