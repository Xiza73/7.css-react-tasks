import { Navigate, Route, Routes } from 'react-router-dom';

import { PublicRoute } from '@/routes/components/PublicRoute';
import { AuthRoute } from '@/routes/models/auth.model';
import { ModuleRoute } from '@/routes/models/module.model';

import { AuthLayout } from './components/AuthLayout';
import { Login } from './pages/Login/Login';

export const Auth: React.FC = () => {
  return (
    <PublicRoute>
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
    </PublicRoute>
  );
};
