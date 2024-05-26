import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/routes/components/PrivateRoute';
import { HomeRoute } from '@/routes/models/home.model';
import { ModuleRoute } from '@/routes/models/module.model';
import { UserLayout } from '@/shared/components/Layout/UserLayout';

import { Main } from './pages/Main';

export const Home: React.FC = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Routes>
          <Route
            path={HomeRoute.MAIN}
            element={<Main />}
          />
          <Route
            path="*"
            element={<Navigate to={`${ModuleRoute.HOME}${HomeRoute.MAIN}`} />}
          />
        </Routes>
      </UserLayout>
    </PrivateRoute>
  );
};
