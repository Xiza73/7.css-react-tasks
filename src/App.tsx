import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './routes/components/AppRouter';
import { Loader } from './shared/components/Loader';
import { Modal } from './shared/components/Modal';
import { useAuth } from './store/hooks/useAuth';
import { useAuthStore } from './store/useAuthStore';

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
