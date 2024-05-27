import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './routes/components/AppRouter';
import { Loader } from './shared/components/Loader';
import { Modal } from './shared/components/Modal';
import { useAuth, useSelector } from './store';

function App() {
  const { handlerCurrentUser } = useAuth();
  const { isProcessing } = useSelector((state) => state.auth);

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
