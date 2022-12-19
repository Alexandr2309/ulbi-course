import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles, UserRole } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);
  const navigate = useLocation();
  const userRoles = useSelector(getUserRoles);

  const isHasRequiredRoles = useMemo(() => {
    if (!roles) return true;

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: navigate }} replace />;
  }

  if (!isHasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: navigate }} replace />;
  }

  return children;
}
