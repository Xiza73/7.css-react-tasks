import './index.scss';
import '7.css/dist/7.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { LoaderProvider } from './shared/context/loader/LoaderProvider.tsx';
import { ModalProvider } from './shared/context/modal/ModalProvider.tsx';
import { ToastProvider } from './shared/context/toast/ToastProvider.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoaderProvider>
      <ModalProvider>
        <ToastProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ToastProvider>
      </ModalProvider>
    </LoaderProvider>
  </React.StrictMode>
);
