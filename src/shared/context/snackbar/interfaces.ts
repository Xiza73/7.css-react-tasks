export type Severity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarState {
  isOpen: boolean;
  type: Severity;
  message: string;
}

export interface SnackbarContextProps extends SnackbarState {
  openSnackbar: (props: { type: Severity; message: string }) => void;
  closeSnackbar: () => void;
}

export interface SnackbarProviderProps {
  children: React.ReactNode;
}
