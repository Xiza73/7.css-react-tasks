import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          Home
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  errorComponent: ({ error, info }) => {
    console.error({ error, info });

    return <div> 404 - {error.message}</div>;
  },
});
