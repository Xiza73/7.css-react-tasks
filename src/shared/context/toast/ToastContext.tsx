import { createContext } from '@/shared/utils/create-context.util';

import {
  ToastContextProps,
  ToastMessageType,
  ToastState,
  Truncate,
  Variant,
} from '.';

export const initialState: ToastState = {
  data: [],
};

export const [ToastContext, useToast] = createContext<ToastContextProps>(
  {
    ...initialState,
    push: (
      _id: string,
      _message: string,
      _type: ToastMessageType,
      _lifetime?: number,
      _truncate?: Truncate
    ) => {},
    pushError: (
      _id: string,
      _message: string,
      _lifetime?: number,
      _truncate?: Truncate
    ) => {},
    pushWarning: (
      _id: string,
      _message: string,
      _lifetime?: number,
      _truncate?: Truncate
    ) => {},
    pushSuccess: (
      _id: string,
      _message: string,
      _lifetime?: number,
      _truncate?: Truncate
    ) => {},
    pushInfo: (
      _id: string,
      _message: string,
      _lifetime?: number,
      _truncate?: Truncate
    ) => {},
    pushCustom: (
      _id: string,
      _message: string | React.ReactNode,
      _lifetime: number,
      _truncate?: Truncate,
      _icon?: string
    ) => {},
    setVariant: (_variant?: Variant) => {},
    remove: (_id: string) => {},
  },
  'Toast'
);
