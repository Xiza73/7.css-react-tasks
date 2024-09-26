import { Navigate } from '@tanstack/react-router';

import { ChildrenProps } from '@/shared/models/props.model';
import { useAuthStore } from '@/store/useAuthStore';

export const PrivateRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  if (!isAuthenticated) return <Navigate to={'/auth'} />;

  return <>{children}</>;
};
