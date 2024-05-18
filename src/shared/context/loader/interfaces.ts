export interface LoaderState {
  activeLoaders: number;
  hideLoader: boolean;
}

export interface LoaderContextProps extends LoaderState {
  addLoader: (hideLoader?: boolean) => void;
  removeLoader: () => void;
}

export interface LoaderProviderProps {
  children: React.ReactNode;
}
