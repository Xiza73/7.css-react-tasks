// import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/shared/routes/components/PrivateRoute';
// import { HomeRoute } from '@/shared/routes/models/home.model';
// import { ModuleRoute } from '@/shared/routes/models/module.model';
// import { UserLayout } from '@/shared/components/Layout/UserLayout';

// import { Main } from './pages/Main';

export const Home: React.FC = () => {
  return (
    <PrivateRoute>
      {/* <UserLayout>
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
      </UserLayout> */}
      Home
    </PrivateRoute>
  );
};
