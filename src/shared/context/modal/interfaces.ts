export interface ModalState {
  isOpen: boolean;
  component: React.ReactNode;
  minWidth?: number;
  closeIcon?: boolean;
}

export interface ModalContextProps extends ModalState {
  openModal: (props: {
    component: React.ReactNode;
    minWidth?: number;
    closeIcon?: boolean;
  }) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
  children: React.ReactNode;
}
