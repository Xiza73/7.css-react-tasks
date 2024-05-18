import { Navigate, Route, Routes } from 'react-router-dom';

import { HomeRoute } from '@/routes/models/home.model';
import { ModuleRoute } from '@/routes/models/module.model';
import { useSelector } from '@/store';

import { HomeLayout } from './components/HomeLayout';
import { Main } from './pages/Main';

export const Home: React.FC = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to={ModuleRoute.AUTH} />;

  return (
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
  );
};
