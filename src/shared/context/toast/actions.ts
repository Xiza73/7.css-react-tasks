import { ToastMessageType, Truncate, Variant } from './interfaces';

export const ToastActions = {
  PUSH_ERROR: 'PUSH_ERROR',
  PUSH_WARNING: 'PUSH_WARNING',
  PUSH_SUCCESS: 'PUSH_SUCCESS',
  PUSH_INFO: 'PUSH_INFO',
  PUSH: 'PUSH',
  PUSH_CUSTOM: 'PUSH_CUSTOM',
  SET_VARIANT: 'SET_VARIANT',
  REMOVE: 'REMOVE',
} as const;
export type ToastActions = (typeof ToastActions)[keyof typeof ToastActions];

export interface PushErrorAction {
  type: typeof ToastActions.PUSH_ERROR;
  payload: {
    id: string;
    message: string;
    lifetime: number;
    truncate?: Truncate;
  };
}

export interface PushWarningAction {
  type: typeof ToastActions.PUSH_WARNING;
  payload: {
    id: string;
    message: string;
    lifetime: number;
    truncate?: Truncate;
  };
}

export interface PushSuccessAction {
  type: typeof ToastActions.PUSH_SUCCESS;
  payload: {
    id: string;
    message: string;
    lifetime: number;
    truncate?: Truncate;
  };
}

export interface PushInfoAction {
  type: typeof ToastActions.PUSH_INFO;
  payload: {
    id: string;
    message: string;
    lifetime: number;
    truncate?: Truncate;
  };
}

export interface PushAction {
  type: typeof ToastActions.PUSH;
  payload: {
    id: string;
    message: string;
    type: ToastMessageType;
    lifetime: number;
    truncate?: Truncate;
  };
}

export interface PushCustomAction {
  type: typeof ToastActions.PUSH_CUSTOM;
  payload: {
    id: string;
    message: string | React.ReactNode;
    lifetime: number;
    truncate?: Truncate;
    icon?: string;
  };
}

export interface SetVariantAction {
  type: typeof ToastActions.SET_VARIANT;
  payload: {
    variant: Variant;
  };
}

export interface RemoveAction {
  type: typeof ToastActions.REMOVE;
  payload: {
    id: string;
  };
}

export type ToastAction =
  | PushErrorAction
  | PushWarningAction
  | PushSuccessAction
  | PushInfoAction
  | PushAction
  | PushCustomAction
  | SetVariantAction
  | RemoveAction;
