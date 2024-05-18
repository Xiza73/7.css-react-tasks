import * as Redux from 'react-redux';

import { AppDispatch, RootState } from '..';

export const useDispatch = () => Redux.useDispatch<AppDispatch>();
export const useSelector: Redux.TypedUseSelectorHook<RootState> = Redux.useSelector;
