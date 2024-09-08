import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
