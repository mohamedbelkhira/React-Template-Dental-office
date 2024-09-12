import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const RequireAuth = ({ AllowdRoles }) => {
  const [auth] = useState(JSON.parse(localStorage.getItem('auth')));

  const location = useLocation();
  return auth?.roles?.find((role) => AllowdRoles?.includes(role)) ? (
    <Outlet context={auth?.roles} />
  ) : auth?.username ? (
    <div>Not NotAuthorized</div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
