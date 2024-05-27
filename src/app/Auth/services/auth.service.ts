import { axios, getHeaders } from '@/config/axios.config';
import { env } from '@/shared/utils/env-config.util';
import { loadAbort } from '@/shared/utils/load-abort.util';

const apiUrl = env.API_URL;
const MODULE = '/auth';

export const signIn = (email: string, password: string) => {
  const controller = loadAbort();

  const call = axios.post(
    `${MODULE}/signin`,
    { email, password },
    { signal: controller.signal }
  );

  return { call, controller };
};

export const getSignInGoogleUrl = () => {
  return `${apiUrl}${MODULE}/google`;
};

export const loginSuccess = () => {
  const controller = loadAbort();

  const call = axios.get(`${MODULE}/login/success`, {
    signal: controller.signal,
  });

  return { call, controller };
};

export const logout = () => {
  const controller = loadAbort();

  const call = axios.get(`${MODULE}/logout`, { signal: controller.signal });

  return { call, controller };
};

export const signUp = (
  email: string,
  password: string,
  repeatPassword: string
) => {
  const controller = loadAbort();

  const call = axios.post(
    `${MODULE}/signup`,
    { email, password, repeatPassword },
    { signal: controller.signal }
  );

  return { call, controller };
};

export const checkSession = () => {
  const controller = loadAbort();

  const call = axios.get(`${MODULE}/check-session`, {
    signal: controller.signal,
    headers: getHeaders(),
  });

  return { call, controller };
};
