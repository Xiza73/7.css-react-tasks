import { createFileRoute, Navigate, Outlet } from '@tanstack/react-router';

import { AuthLayout } from '@/app/Auth/components/AuthLayout';
import { PublicRoute } from '@/shared/routes/components/PublicRoute';

const Auth: React.FC = () => {
  return (
    <PublicRoute>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </PublicRoute>
  );
};

export const Route = createFileRoute('/auth')({
  component: Auth,
  notFoundComponent: () => <Navigate to="/auth/login" />,
});
