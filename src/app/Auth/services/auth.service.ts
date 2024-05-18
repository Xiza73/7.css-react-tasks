import axios from 'axios';

import { env } from '@/shared/utils/env-config.util';
import { loadAbort } from '@/shared/utils/load-abort.util';

const apiUrl = env.API_URL;
const authUrl = `${apiUrl}/auth`;

export const signIn = (email: string, password: string) => {
  const controller = loadAbort();

  const call = axios.post(`${authUrl}/signin`, { email, password }, { signal: controller.signal });

  return { call, controller };
};

export const getSignInGoogleUrl = () => {
  return `${authUrl}/google`;
};

export const loginSuccess = () => {
  const controller = loadAbort();

  const call /* : Promise<AxiosResponse<User, any>> */ = axios.get(`${authUrl}/login/success`, {
    signal: controller.signal,
    withCredentials: true,
  });

  return { call, controller };
};

export const logout = () => {
  const controller = loadAbort();

  const call = axios.get(`${authUrl}/logout`, { signal: controller.signal });

  return { call, controller };
};

export const signUp = (email: string, password: string, repeatPassword: string) => {
  const controller = loadAbort();

  const call = axios.post(`${authUrl}/signup`, { email, password, repeatPassword }, { signal: controller.signal });

  return { call, controller };
};
