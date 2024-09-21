import { create } from 'zustand';

import { logger } from './logger';
import { AuthState, AuthStore } from './models/auth.model';

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: false,
  isProcessing: true,
};

export const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      login: (user) => set({ isAuthenticated: true, user }),
      logout: () => set({ isAuthenticated: false, isProcessing: false }),
      signUp: (user) =>
        set({ isAuthenticated: true, isProcessing: false, user }),
      endProcessing: () => set({ isProcessing: false }),
    }),
    'authStore'
  )
);
