import {
  PushAction,
  PushCustomAction,
  PushErrorAction,
  PushInfoAction,
  PushSuccessAction,
  PushWarningAction,
  RemoveAction,
  SetVariantAction,
  ToastAction,
  ToastActions,
  ToastState,
} from '.';

type ToastHandler = (state: ToastState, action: ToastAction) => ToastState;

const toastReducerHandler: Record<ToastActions, ToastHandler> = {
  [ToastActions.PUSH]: (state, action) => {
    const { id, message, type, lifetime, truncate } = (action as PushAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          type,
        },
      ],
    };
  },
  [ToastActions.PUSH_INFO]: (state, action) => {
    const { id, message, lifetime, truncate } = (action as PushInfoAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          type: 'Info',
        },
      ],
    };
  },
  [ToastActions.PUSH_SUCCESS]: (state, action) => {
    const { id, message, lifetime, truncate } = (action as PushSuccessAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          type: 'Success',
        },
      ],
    };
  },
  [ToastActions.PUSH_WARNING]: (state, action) => {
    const { id, message, lifetime, truncate } = (action as PushWarningAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          type: 'Warning',
        },
      ],
    };
  },
  [ToastActions.PUSH_ERROR]: (state, action) => {
    const { id, message, lifetime, truncate } = (action as PushErrorAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          type: 'Error',
        },
      ],
    };
  },
  [ToastActions.PUSH_CUSTOM]: (state, action) => {
    const { id, message, icon, lifetime, truncate } = (action as PushCustomAction).payload;

    return {
      ...state,
      data: [
        ...state.data,
        {
          id,
          lifetime,
          truncate,
          message,
          icon,
        },
      ],
    };
  },
  [ToastActions.SET_VARIANT]: (state, action) => {
    const { variant } = (action as SetVariantAction).payload;

    return {
      ...state,
      variant,
    };
  },
  [ToastActions.REMOVE]: (state, action) => {
    const { id } = (action as RemoveAction).payload;

    return {
      ...state,
      data: state.data.filter((item) => item.id !== id),
    };
  },
};

export const toastReducer = (state: ToastState, action: ToastAction): ToastState =>
  toastReducerHandler[action.type](state, action) ?? state;
