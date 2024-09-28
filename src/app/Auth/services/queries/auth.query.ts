import { useMutation } from '@/shared/hooks/useMutation';
import { useQuery } from '@/shared/hooks/useQuery';
import {
  AxiosData,
  QueryBody,
  QueryParams,
  SuccessResponse,
} from '@/shared/models/axios.model';

import { userAdapter } from '../../adapters/auth.adapter';
import { SignInBody, SignUpBody, User } from '../../models/auth.model';
import {
  checkSession,
  loginSuccess,
  logout,
  signIn,
  signUp,
} from '../api/auth.service';

export const useSignInMutation = (query?: QueryBody<SignInBody>) =>
  useMutation<SignInBody, AxiosData<User>>({
    ...query,
    mutationFn: async (params: SignInBody) => {
      const data = await signIn(params);

      const user = userAdapter(data.responseObject);

      return { ...data, responseObject: user };
    },
  });

export const useLoginSuccessQuery = (query?: QueryParams<null>) =>
  useQuery<null, AxiosData<User>>({
    ...query,
    queryKey: ['loginSuccess', { ...query }],
    queryFn: async () => {
      const data = await loginSuccess();

      const user = userAdapter(data.responseObject);

      return { ...data, responseObject: user };
    },
  });

export const useLoginSuccessMutation = (query?: QueryBody<null>) =>
  useMutation<null, AxiosData<User>>({
    ...query,
    mutationFn: async () => {
      const data = await loginSuccess();

      const user = userAdapter(data.responseObject);

      return { ...data, responseObject: user };
    },
  });

export const useLogoutMutation = (query?: QueryBody<null>) =>
  useMutation<null, SuccessResponse>({
    ...query,
    mutationFn: async () => {
      const data = await logout();

      return data;
    },
  });

export const useSignUpMutation = (query?: QueryBody<SignUpBody>) =>
  useMutation<SignUpBody, AxiosData<User>>({
    ...query,
    mutationFn: async (params: SignUpBody) => {
      const data = await signUp(params);

      const user = userAdapter(data.responseObject);

      return { ...data, responseObject: user };
    },
  });

export const useCheckSessionMutation = (query?: QueryBody<null>) =>
  useMutation<null, AxiosData<SuccessResponse>>({
    ...query,
    mutationFn: async () => {
      const data = await checkSession();

      return data;
    },
  });
