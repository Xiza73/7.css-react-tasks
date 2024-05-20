import { Navigate } from 'react-router-dom';

import { ChildrenProps } from '@/shared/models/props.model';
import { useSelector } from '@/store';

import { ModuleRoute } from '../models/module.model';

export const PrivateRoute: React.FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to={ModuleRoute.AUTH} />;

  return <>{children}</>;
};
