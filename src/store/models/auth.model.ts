import { User } from '@/app/Auth/models/auth.model';

export interface AuthState {
  isAuthenticated: boolean;
  isProcessing: boolean;
  user?: User;
}

export interface AuthStore extends AuthState {
  login: (args: AuthState['user']) => void;
  logout: () => void;
  signUp: (args: AuthState['user']) => void;
  endProcessing: () => void;
}
