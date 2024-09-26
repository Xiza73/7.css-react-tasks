import { createRootRoute, Outlet, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { useKeyboardShortcut } from '@/shared/hooks/useKeyboardShortcut';

const AppRoute: React.FC = () => {
  const navigate = useNavigate();

  useKeyboardShortcut(
    (e) => {
      e.preventDefault();

      navigate({ to: '/task' });
    },
    { code: 'KeyT', altKey: true }
  );

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: AppRoute,
  errorComponent: ({ error }) => {
    return <div> 404 - {error.message}</div>;
  },
  notFoundComponent: () => <div>404 - Not Found</div>,
});
