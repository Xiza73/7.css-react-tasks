import { User } from '@/app/Auth/models/auth.model';

export interface AuthState {
  isAuthenticated: boolean;
  isProcessing: boolean;
  user?: User;
}
