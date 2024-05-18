export const LoaderActions = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
} as const;
export type LoaderActions = (typeof LoaderActions)[keyof typeof LoaderActions];

export interface AddLoaderAction {
  type: typeof LoaderActions.START_LOADING;
  payload: boolean;
}

interface RemoveLoaderAction {
  type: typeof LoaderActions.STOP_LOADING;
}

export type LoaderAction = AddLoaderAction | RemoveLoaderAction;
