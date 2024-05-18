import { createContext } from '@/shared/utils/create-context.util';

import { Severity, SnackbarContextProps, SnackbarState } from '.';

const initialState: SnackbarState = {
  isOpen: false,
  message: '',
  type: 'success',
};

export const [SnackbarContext, useSnackbar] = createContext<SnackbarContextProps>(
  {
    ...initialState,
    openSnackbar: (_: { type: Severity; message: string }) => {},
    closeSnackbar: () => {},
  },
  'Snackbar'
);
