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
