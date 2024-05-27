export const ToastMessageType = {
  ERROR: 'Error',
  INFO: 'Info',
  SUCCESS: 'Success',
  WARNING: 'Warning',
} as const;
export type ToastMessageType =
  (typeof ToastMessageType)[keyof typeof ToastMessageType];

export type Truncate =
  | 'truncate-1-lines'
  | 'truncate-2-lines'
  | 'truncate-3-lines';

export const Variant = {
  BOTTOM_LEFT: 'bottom-5 left-0',
  BOTTOM_MIDDLE: 'bottom-0 left-1/2 -translate-x-1/2 transform',
  BOTTOM_RIGHT: 'bottom-5 right-0',
  TOP_LEFT: 'top-0 left-0',
  TOP_MIDDLE: 'top-0 left-1/2 -translate-x-1/2 transform',
  TOP_RIGHT: 'top-0 right-0',
} as const;
export type Variant = (typeof Variant)[keyof typeof Variant];

export type Toast = {
  id: string;
  lifetime: number;
  message: string | React.ReactNode;
  type?: ToastMessageType;
  truncate?: Truncate;
  icon?: string;
  header?: string;
};

export interface ToastState {
  data: Array<Toast>;
  variant?: Variant;
}

export interface ToastContextProps extends ToastState {
  pushError(
    id: string,
    message: string,
    lifetime?: number,
    truncate?: Truncate
  ): void;
  pushWarning(
    id: string,
    message: string,
    lifetime?: number,
    truncate?: Truncate
  ): void;
  pushSuccess(
    id: string,
    message: string,
    lifetime?: number,
    truncate?: Truncate
  ): void;
  pushInfo(
    id: string,
    message: string,
    lifetime?: number,
    truncate?: Truncate
  ): void;
  push(
    id: string,
    message: string,
    type: ToastMessageType,
    lifetime?: number,
    truncate?: Truncate
  ): void;
  pushCustom(
    id: string,
    message: string | React.ReactNode,
    lifetime: number,
    truncate?: Truncate,
    icon?: string
  ): void;
  setVariant(variant?: Variant): void;
  remove(id: string): void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}
