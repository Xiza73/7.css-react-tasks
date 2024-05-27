import { createContext } from '@/shared/utils/create-context.util';

import { ModalContextProps, ModalState } from './interfaces';

const initialState: ModalState = {
  isOpen: false,
  component: null,
  closeIcon: false,
  minWidth: 400,
};

export const [ModalContext, useModal] = createContext<ModalContextProps>(
  {
    ...initialState,
    openModal: (_: {
      component: React.ReactNode;
      closeIcon?: boolean;
      minWidth?: number;
    }) => {},
    closeModal: () => {},
  },
  'Modal'
);
