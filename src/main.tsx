import './index.scss';
import '7.css/dist/7.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { LoaderProvider } from './shared/context/loader/LoaderProvider.tsx';
import { ModalProvider } from './shared/context/modal/ModalProvider.tsx';
import { ToastProvider } from './shared/context/toast/ToastProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoaderProvider>
      <ModalProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ModalProvider>
    </LoaderProvider>
  </React.StrictMode>
);
