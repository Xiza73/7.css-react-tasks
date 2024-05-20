import { Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '@/routes/components/PrivateRoute';
import { ModuleRoute } from '@/routes/models/module.model';
import { TasksRoute } from '@/routes/models/tasks.model';

import { TaskLayout } from './components/TaskLayout';
import { CreateTask } from './pages/CreateTask';

export const Tasks: React.FC = () => {
  return (
    <PrivateRoute>
      <TaskLayout>
        <Routes>
          <Route
            path={TasksRoute.CREATE}
            element={<CreateTask />}
          />
          <Route
            path="*"
            element={<Navigate to={`${ModuleRoute.TASKS}${TasksRoute.CREATE}`} />}
          />
        </Routes>
      </TaskLayout>
    </PrivateRoute>
  );
};
