import React, { useCallback, useMemo, useReducer } from 'react';

import ToastContainer from '@/shared/components/Toast/ToastContainer';

import { initialState, ToastContext } from '.';
import { ToastActions } from './actions';
import { ToastMessageType, ToastProviderProps, Truncate, Variant } from './interfaces';
import { toastReducer } from './reducer';

const DEFAULT_INTERVAL = 3000;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const push = useCallback(
    (id: string, message: string, type: ToastMessageType, lifetime?: number, truncate?: Truncate) => {
      dispatch({
        type: ToastActions.PUSH,
        payload: { id, message, type, lifetime: lifetime ?? DEFAULT_INTERVAL, truncate },
      });
    },
    []
  );

  const pushError = useCallback((id: string, message: string, lifetime?: number, truncate?: Truncate) => {
    dispatch({
      type: ToastActions.PUSH_ERROR,
      payload: { id, message, lifetime: lifetime ?? DEFAULT_INTERVAL, truncate },
    });
  }, []);

  const pushWarning = useCallback((id: string, message: string, lifetime?: number, truncate?: Truncate) => {
    dispatch({
      type: ToastActions.PUSH_WARNING,
      payload: { id, message, lifetime: lifetime ?? DEFAULT_INTERVAL, truncate },
    });
  }, []);

  const pushSuccess = useCallback((id: string, message: string, lifetime?: number, truncate?: Truncate) => {
    dispatch({
      type: ToastActions.PUSH_SUCCESS,
      payload: { id, message, lifetime: lifetime ?? DEFAULT_INTERVAL, truncate },
    });
  }, []);

  const pushInfo = useCallback((id: string, message: string, lifetime?: number, truncate?: Truncate) => {
    dispatch({
      type: ToastActions.PUSH_INFO,
      payload: { id, message, lifetime: lifetime ?? DEFAULT_INTERVAL, truncate },
    });
  }, []);

  const pushCustom = useCallback(
    (id: string, message: string | React.ReactNode, lifetime: number, truncate?: Truncate, icon?: string) => {
      dispatch({
        type: ToastActions.PUSH_CUSTOM,
        payload: { id, message, lifetime, truncate, icon },
      });
    },
    []
  );

  const setVariant = useCallback((variant?: Variant) => {
    dispatch({
      type: ToastActions.SET_VARIANT,
      payload: { variant: variant ?? Variant.BOTTOM_RIGHT },
    });
  }, []);

  const remove = useCallback((id: string) => {
    dispatch({
      type: ToastActions.REMOVE,
      payload: { id },
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      pushError,
      pushWarning,
      pushSuccess,
      pushInfo,
      push,
      pushCustom,
      setVariant,
      remove,
    }),
    [state, pushError, pushWarning, pushSuccess, pushInfo, push, pushCustom, setVariant, remove]
  );

  return (
    <ToastContext.Provider value={value}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
