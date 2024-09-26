import { createLazyFileRoute } from '@tanstack/react-router';

import { Main } from '@/app/Home/pages/Main';
import { UserLayout } from '@/shared/components/Layout/UserLayout';
import { PrivateRoute } from '@/shared/routes/components/PrivateRoute';

const Home: React.FC = () => {
  return (
    <PrivateRoute>
      <UserLayout>
        <Main />
      </UserLayout>
    </PrivateRoute>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
