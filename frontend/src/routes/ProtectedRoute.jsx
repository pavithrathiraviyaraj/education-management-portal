import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const ProtectedRoute = ({ allowedRole }) => {
  const { selectedRole } = useContext(UserContext);

  if (allowedRole && selectedRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
