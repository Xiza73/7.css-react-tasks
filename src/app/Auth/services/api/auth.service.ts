import { api } from '@/lib/api';
import { SuccessResponse } from '@/shared/models/axios.model';
import { env } from '@/shared/utils/env-config.util';

import {
  GetUserResponse,
  SignInBody,
  SignUpBody,
} from '../../models/auth.model';

const apiUrl = env.API_URL;
const MODULE = '/auth';

export const signIn = async (body: SignInBody) => {
  const { data } = await api.post<GetUserResponse>(`${MODULE}/signin`, body);

  return data;
};

export const getSignInGoogleUrl = () => {
  return `${apiUrl}${MODULE}/google`;
};

export const loginSuccess = async () => {
  const { data } = await api.get<GetUserResponse>(`${MODULE}/login/success`);

  return data;
};

export const logout = async () => {
  const { data } = await api.get(`${MODULE}/logout`);

  return data;
};

export const signUp = async (body: SignUpBody) => {
  const { data } = await api.post<GetUserResponse>(`${MODULE}/signup`, body);

  return data;
};

export const checkSession = async () => {
  const { data } = await api.get<SuccessResponse>(`${MODULE}/check-session`);

  return data;
};
