import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './AppRouter';
import { Loader } from './shared/components/Loader';
import { useAuth } from './store';

function App() {
  const { handlerCurrentUser } = useAuth();

  useEffect(() => {
    handlerCurrentUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RouterProvider router={AppRouter} />
      <Loader />
    </>
  );
}

export default App;
