import { createContext } from '@/shared/utils/create-context.util';

import { LoaderContextProps, LoaderState } from '.';

const initialState: LoaderState = {
  activeLoaders: 0,
  hideLoader: false,
};

export const [LoaderContext, useLoader] = createContext<LoaderContextProps>(
  {
    ...initialState,
    addLoader: (_?: boolean) => {},
    removeLoader: () => {},
  },
  'Loader'
);
