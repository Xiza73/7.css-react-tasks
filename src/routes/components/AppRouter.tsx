import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, useNavigate } from 'react-router-dom';

import Auth from '@/app/Auth';
import Home from '@/app/Home';
import Tasks from '@/app/Tasks';
import { useKeyboardShortcut } from '@/shared/hooks/useKeyboardShortcut';

import { ModuleRoute } from '../models/module.model';

export const AppRouteConfig: React.FC = () => {
  const navigate = useNavigate();

  useKeyboardShortcut(
    (e) => {
      e.preventDefault();

      navigate('/tasks');
    },
    { code: 'KeyT', altKey: true }
  );

  return <Outlet />;
};

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppRouteConfig />}>
      <Route
        path={`${ModuleRoute.AUTH}/*`}
        element={<Auth />}
      />
      <Route
        path={`${ModuleRoute.TASKS}/*`}
        element={<Tasks />}
      />
      <Route
        path={`${ModuleRoute.HOME}/*`}
        element={<Home />}
      />
      <Route
        path="*"
        element={<Navigate to={ModuleRoute.HOME} />}
      />
    </Route>
  )
);
