import {
  LoaderAction,
  LoaderActions,
  PushLoaderAction,
  SetIsFetchingAction,
} from './actions';
import { LoaderState } from './interfaces';

type LoaderHandler = (state: LoaderState, action: LoaderAction) => LoaderState;

const loaderReducerHandler: Record<LoaderActions, LoaderHandler> = {
  [LoaderActions.PUSH_LOADER]: (state, action) => ({
    ...state,
    activeLoaders: state.activeLoaders + 1,
    hideLoader: (action as PushLoaderAction).payload,
  }),
  [LoaderActions.POP_LOADER]: (state) => {
    const activeLoaders = state.activeLoaders - 1;

    return {
      ...state,
      activeLoaders: activeLoaders < 0 ? 0 : activeLoaders,
    };
  },
  [LoaderActions.SET_IS_FETCHING]: (state, action) => ({
    ...state,
    isFetching: (action as SetIsFetchingAction).payload,
  }),
};

export const loaderReducer = (
  state: LoaderState,
  action: LoaderAction
): LoaderState => loaderReducerHandler[action.type](state, action) ?? state;
