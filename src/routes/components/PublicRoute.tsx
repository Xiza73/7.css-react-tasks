import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/shared/models/props.model';
import { useSelector } from '@/store';

import { ModuleRoute } from '../models/module.model';

export const PublicRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to={ModuleRoute.TASKS} />;

  return <>{children}</>;
};
