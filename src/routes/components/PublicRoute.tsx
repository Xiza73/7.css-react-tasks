import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/shared/models/props.model';
import { useAuthStore } from '@/store/useAuthStore';

import { ModuleRoute } from '../models/module.model';

export const PublicRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  if (isAuthenticated) return <Navigate to={ModuleRoute.TASKS} />;

  return <>{children}</>;
};
