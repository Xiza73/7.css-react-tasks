import { Navigate } from '@tanstack/react-router';

import { ChildrenProps } from '@/shared/models/props.model';
import { useAuthStore } from '@/store/useAuthStore';

export const PublicRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  if (isAuthenticated) return <Navigate to={'/task'} />;

  return <>{children}</>;
};
