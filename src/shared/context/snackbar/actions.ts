import { Severity } from './interfaces';

export const SnackbarActions = {
  SHOW_SNACKBAR: 'SHOW_SNACKBAR',
  HIDE_SNACKBAR: 'HIDE_SNACKBAR',
} as const;
export type SnackbarActions =
  (typeof SnackbarActions)[keyof typeof SnackbarActions];

export interface ShowSnackbarAction {
  type: typeof SnackbarActions.SHOW_SNACKBAR;
  payload: {
    type: Severity;
    message: string;
  };
}

interface HideSnackbarAction {
  type: typeof SnackbarActions.HIDE_SNACKBAR;
}

export type SnackbarAction = ShowSnackbarAction | HideSnackbarAction;
