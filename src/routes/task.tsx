import { createFileRoute, Outlet } from '@tanstack/react-router';

import { TaskProvider } from '@/app/Tasks/context/task/TaskProvider';
import { UserLayout } from '@/shared/components/Layout/UserLayout';
import { PrivateRoute } from '@/shared/routes/components/PrivateRoute';

const Tasks: React.FC = () => {
  return (
    <PrivateRoute>
      <TaskProvider>
        <UserLayout>
          <Outlet />
        </UserLayout>
      </TaskProvider>
    </PrivateRoute>
  );
};

export const Route = createFileRoute('/task')({
  component: Tasks,
});
