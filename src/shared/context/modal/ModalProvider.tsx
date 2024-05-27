import { useCallback, useMemo, useReducer } from 'react';

import { ModalActions } from './actions';
import { ModalProviderProps } from './interfaces';
import { ModalContext } from './ModalContext';
import { modalReducer } from './reducer';

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, {
    isOpen: false,
    component: null,
    closeIcon: false,
    minWidth: 400,
  });

  const openModal = useCallback(
    ({
      component,
      closeIcon = false,
      minWidth = 400,
    }: {
      component: React.ReactNode;
      closeIcon?: boolean;
      minWidth?: number;
    }) => {
      dispatch({
        type: ModalActions.SHOW_MODAL,
        payload: { component, closeIcon, minWidth },
      });
    },
    []
  );

  const closeModal = useCallback(() => {
    dispatch({ type: ModalActions.HIDE_MODAL });
  }, []);

  const value = useMemo(
    () => ({ ...state, openModal, closeModal }),
    [state, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
