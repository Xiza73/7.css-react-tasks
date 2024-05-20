import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';

import Auth from '@/app/Auth';
import Home from '@/app/Home';
import Tasks from '@/app/Tasks';

import { ModuleRoute } from '../models/module.model';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
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
