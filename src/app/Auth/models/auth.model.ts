import { AxiosData } from '@/shared/models/axios.model';

export interface ApiUser {
  _id: string;
  local?: {
    email: string;
  };
  google?: {
    id: string;
    email: string;
    name: string;
  };
  token?: string;
  createdAt: string;
  updatedAt: string;
}

type Origin = 'local' | 'google';

export interface User {
  id: string;
  email: string;
  name: string;
  origin: Origin;
  token?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignInBody {
  email: string;
  password: string;
}

export interface SignUpBody {
  email: string;
  password: string;
  repeatPassword: string;
}

export type GetUserResponse = AxiosData<ApiUser>;
