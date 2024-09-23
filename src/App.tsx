import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useEffect } from 'react';

import { routeTree } from './routeTree.gen';
import { Loader } from './shared/components/Loader';
import { Modal } from './shared/components/Modal';
import { useAuth } from './store/hooks/useAuth';
import { useAuthStore } from './store/useAuthStore';

export const AppRouter = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof AppRouter;
  }
}

function App() {
  const { handlerCurrentUser } = useAuth();
  const { isProcessing } = useAuthStore((state) => state);

  useEffect(() => {
    handlerCurrentUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isProcessing) return <Loader loading />;

  return (
    <>
      <RouterProvider router={AppRouter} />
      <Loader />
      <Modal />
    </>
  );
}

export default App;
