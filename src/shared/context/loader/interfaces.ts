export interface LoaderState {
  activeLoaders: number;
  isFetching: boolean;
  hideLoader: boolean;
}

export interface LoaderContextProps extends LoaderState {
  pushLoader: (hideLoader?: boolean) => void;
  popLoader: () => void;
  setIsFetching: (isFetching: boolean) => void;
}

export interface LoaderProviderProps {
  children: React.ReactNode;
}
