import { createContext } from '@/shared/utils/create-context.util';

import { LoaderContextProps, LoaderState } from '.';

export const loaderInitialState: LoaderState = {
  activeLoaders: 0,
  isFetching: false,
  hideLoader: false,
};

export const [LoaderContext, useLoader] = createContext<LoaderContextProps>(
  {
    ...loaderInitialState,
    pushLoader: (_?: boolean) => {},
    popLoader: () => {},
    setIsFetching: (_: boolean) => {},
  },
  'Loader'
);
