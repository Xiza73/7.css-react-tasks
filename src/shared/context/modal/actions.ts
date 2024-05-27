export const ModalActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
} as const;
export type ModalActions = (typeof ModalActions)[keyof typeof ModalActions];

export interface ShowModalAction {
  type: typeof ModalActions.SHOW_MODAL;
  payload: {
    component: React.ReactNode;
    closeIcon?: boolean;
    minWidth?: number;
  };
}

interface HideModalAction {
  type: typeof ModalActions.HIDE_MODAL;
}

export type ModalAction = ShowModalAction | HideModalAction;
