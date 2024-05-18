import { ShowSnackbarAction, SnackbarAction, SnackbarActions, SnackbarState } from '.';

type SnackbarHandler = (state: SnackbarState, action: SnackbarAction) => SnackbarState;

const snackbarReducerHandler: Record<SnackbarActions, SnackbarHandler> = {
  [SnackbarActions.SHOW_SNACKBAR]: (state, action) => {
    const { type, message } = (action as ShowSnackbarAction).payload;

    return {
      ...state,
      isOpen: true,
      type,
      message,
    };
  },
  [SnackbarActions.HIDE_SNACKBAR]: (state) => ({
    ...state,
    isOpen: false,
  }),
};

export const snackbarReducer = (state: SnackbarState, action: SnackbarAction): SnackbarState =>
  snackbarReducerHandler[action.type](state, action) ?? state;
