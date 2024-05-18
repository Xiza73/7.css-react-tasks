import { AddLoaderAction, LoaderAction, LoaderActions } from './actions';
import { LoaderState } from './interfaces';

type LoaderHandler = (state: LoaderState, action: LoaderAction) => LoaderState;

const loaderReducerHandler: Record<LoaderActions, LoaderHandler> = {
  [LoaderActions.START_LOADING]: (state, action) => ({
    ...state,
    activeLoaders: state.activeLoaders + 1,
    hideLoader: (action as AddLoaderAction).payload,
  }),
  [LoaderActions.STOP_LOADING]: (state) => {
    const activeLoaders = state.activeLoaders - 1;

    return {
      ...state,
      activeLoaders: activeLoaders < 0 ? 0 : activeLoaders,
    };
  },
};

export const loaderReducer = (state: LoaderState, action: LoaderAction): LoaderState =>
  loaderReducerHandler[action.type](state, action) ?? state;
