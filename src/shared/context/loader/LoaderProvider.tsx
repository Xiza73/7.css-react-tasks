import { useCallback, useMemo, useReducer } from 'react';

import {
  LoaderActions,
  LoaderContext,
  LoaderProviderProps,
  loaderReducer,
} from '.';

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(loaderReducer, {
    activeLoaders: 0,
    hideLoader: false,
  });

  const addLoader = useCallback((hideLoader = false) => {
    dispatch({ type: LoaderActions.START_LOADING, payload: hideLoader });
  }, []);

  const removeLoader = useCallback(() => {
    dispatch({ type: LoaderActions.STOP_LOADING });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      addLoader,
      removeLoader,
    }),
    [state, addLoader, removeLoader]
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
