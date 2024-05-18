import { Provider } from 'react-redux';

import { store } from '.';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
