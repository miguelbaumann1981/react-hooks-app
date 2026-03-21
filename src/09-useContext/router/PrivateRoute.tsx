import type React from 'react';
import { use } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../context/UserContext';

interface Props {
  element: React.ReactNode;
}

export const PrivateRoute = ({ element }: Props) => {
  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading...</div>;
  }

  if (authStatus === 'authenticated') {
    return element;
  }

  return <Navigate to="/login" replace />;
};
