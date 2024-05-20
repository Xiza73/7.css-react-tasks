import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/routes/components/PrivateRoute';
import { HomeRoute } from '@/routes/models/home.model';
import { ModuleRoute } from '@/routes/models/module.model';

import { HomeLayout } from './components/HomeLayout';
import { Main } from './pages/Main';

export const Home: React.FC = () => {
  return (
    <PrivateRoute>
      <HomeLayout>
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
      </HomeLayout>
    </PrivateRoute>
  );
};
