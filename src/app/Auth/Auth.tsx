import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoute } from '@/routes/models/auth.model';
import { ModuleRoute } from '@/routes/models/module.model';
import { useSelector } from '@/store';

import { AuthLayout } from './components/AuthLayout';
import { Login } from './pages/Login/Login';

export const Auth: React.FC = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to={ModuleRoute.HOME} />;

  return (
    <AuthLayout>
      <Routes>
        <Route
          path={AuthRoute.LOGIN}
          element={<Login />}
        />
        <Route
          path="*"
          element={<Navigate to={`${ModuleRoute.AUTH}${AuthRoute.LOGIN}`} />}
        />
      </Routes>
    </AuthLayout>
  );
};
