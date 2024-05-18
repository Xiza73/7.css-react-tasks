import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from '../models/auth.model';

export const initialState: AuthState = {
  isAuthenticated: false,
  isProcessing: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isProcessing = false;
      state.user = undefined;
    },
    signUp: (state, action) => {
      state.isAuthenticated = true;
      state.isProcessing = false;
      state.user = action.payload;
    },
    endProcessing: (state) => {
      state.isProcessing = false;
    },
  },
});

export const { login, logout, signUp, endProcessing } = authSlice.actions;

export const authReducer = authSlice.reducer;
