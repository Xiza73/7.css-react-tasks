// import { Navigate } from '@tanstack/react-router';

import { ChildrenProps } from '@/shared/models/props.model';
// import { useAuthStore } from '@/store/useAuthStore';

// import { ModuleRoute } from '../models/module.model';

export const PrivateRoute: React.FC<ChildrenProps> = ({ children }) => {
  // const { isAuthenticated } = useAuthStore((state) => state);

  // if (!isAuthenticated) return <Navigate to={ModuleRoute.AUTH} />;

  return <>{children}</>;
};
