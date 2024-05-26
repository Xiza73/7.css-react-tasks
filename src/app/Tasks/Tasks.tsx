import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/routes/components/PrivateRoute';
import { ModuleRoute } from '@/routes/models/module.model';
import { TasksRoute } from '@/routes/models/tasks.model';
import { UserLayout } from '@/shared/components/Layout/UserLayout';

import { CreateTask } from './pages/CreateTask';
import { ListTasks } from './pages/ListTasks';

export const Tasks: React.FC = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Routes>
          <Route
            path={TasksRoute.LIST}
            element={<ListTasks />}
          />
          <Route
            path={TasksRoute.CREATE}
            element={<CreateTask />}
          />
          <Route
            path={TasksRoute.EDIT}
            element={<CreateTask />}
          />
          <Route
            path="*"
            element={<Navigate to={`${ModuleRoute.TASKS}${TasksRoute.LIST}`} />}
          />
        </Routes>
      </UserLayout>
    </PrivateRoute>
  );
};
