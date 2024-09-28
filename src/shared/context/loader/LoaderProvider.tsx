import { useCallback, useMemo, useReducer } from 'react';

import {
  LoaderActions,
  LoaderContext,
  loaderInitialState,
  LoaderProviderProps,
  loaderReducer,
} from '.';

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(loaderReducer, loaderInitialState);

  const pushLoader = useCallback((hideLoader = false) => {
    dispatch({ type: LoaderActions.PUSH_LOADER, payload: hideLoader });
  }, []);

  const popLoader = useCallback(() => {
    dispatch({ type: LoaderActions.POP_LOADER });
  }, []);

  const setIsFetching = useCallback((isFetching: boolean) => {
    dispatch({ type: LoaderActions.SET_IS_FETCHING, payload: isFetching });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      pushLoader,
      popLoader,
      setIsFetching,
    }),
    [state, pushLoader, popLoader, setIsFetching]
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
