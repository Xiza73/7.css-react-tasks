import { useCallback, useMemo, useReducer } from 'react';

import { SnackbarContext } from '.';
import { SnackbarActions } from './actions';
import { Severity, SnackbarProviderProps } from './interfaces';
import { snackbarReducer } from './reducer';

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(snackbarReducer, {
    isOpen: false,
    message: '',
    type: 'success',
  });

  const openSnackbar = useCallback(
    ({ type, message }: { type: Severity; message: string }) => {
      dispatch({
        type: SnackbarActions.SHOW_SNACKBAR,
        payload: { type, message },
      });
    },
    []
  );

  const closeSnackbar = useCallback(() => {
    dispatch({ type: SnackbarActions.HIDE_SNACKBAR });
  }, []);

  const value = useMemo(
    () => ({ ...state, openSnackbar, closeSnackbar }),
    [state, openSnackbar, closeSnackbar]
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
};
