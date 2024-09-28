export const LoaderActions = {
  PUSH_LOADER: 'PUSH_LOADER',
  POP_LOADER: 'POP_LOADER',
  SET_IS_FETCHING: 'SET_IS_FETCHING',
} as const;
export type LoaderActions = (typeof LoaderActions)[keyof typeof LoaderActions];

export interface PushLoaderAction {
  type: typeof LoaderActions.PUSH_LOADER;
  payload: boolean;
}

interface PopLoaderAction {
  type: typeof LoaderActions.POP_LOADER;
}

export interface SetIsFetchingAction {
  type: typeof LoaderActions.SET_IS_FETCHING;
  payload: boolean;
}

export type LoaderAction =
  | PushLoaderAction
  | PopLoaderAction
  | SetIsFetchingAction;
