import { useCallback, useEffect } from 'react';

import { User } from '@/app/Auth/models/auth.model';
import {
  useCheckSessionMutation,
  useLoginSuccessMutation,
  useLogoutMutation,
  useSignInMutation,
  useSignUpMutation,
} from '@/app/Auth/services/queries/auth.query';
import { getItem, removeItem, setItem } from '@/lib/local-storage';
import { useLoader } from '@/shared/context/loader';
import { noopFunction } from '@/shared/utils/noopFunction';

import { useAuthStore } from '../useAuthStore';

export const useAuth = () => {
  const { endProcessing, login, logout, signUp } = useAuthStore(
    (state) => state
  );
  const { pushLoader, popLoader } = useLoader();
  const { error: errorOnCheckSession, mutateAsync: checkSession } =
    useCheckSessionMutation();
  const { data: loginSuccessData, mutateAsync: loginSuccess } =
    useLoginSuccessMutation();
  const { mutateAsync: signIn } = useSignInMutation();
  const { mutateAsync: logoutMutation } = useLogoutMutation();
  const { mutateAsync: signUpMutation } = useSignUpMutation();

  const handlerCurrentUser = useCallback(async () => {
    const user: User | null = getItem('user');

    if (user) {
      await checkSession({});

      login(user);
    }

    if (!user) await loginSuccess({}).catch(noopFunction);

    endProcessing();
    popLoader();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSuccess, checkSession, login]);

  useEffect(() => {
    if (loginSuccessData?.success && loginSuccessData?.responseObject) {
      setItem('user', loginSuccessData?.responseObject);

      login(loginSuccessData?.responseObject);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSuccessData]);

  useEffect(() => {
    if (errorOnCheckSession) {
      removeItem('user');
      logout();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorOnCheckSession]);

  const loginAction = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      pushLoader();

      // const axiosResponse = await callEndpoint<ApiUser>(
      //   authService.signIn(email, password)
      // );
      const axiosResponse = await signIn({ email, password });

      if (axiosResponse.success && axiosResponse.responseObject) {
        setItem('user', axiosResponse.responseObject);

        login(axiosResponse.responseObject);
      }

      popLoader();

      return axiosResponse.success;
    },
    [pushLoader, login, popLoader, signIn]
  );

  const logoutAction = useCallback(async () => {
    pushLoader();

    // const axiosResponse = await callEndpoint<any>(authService.logout());
    const axiosResponse = await logoutMutation({});

    removeItem('user');
    logout();
    popLoader();

    return axiosResponse.success;
  }, [pushLoader, logout, logoutMutation, popLoader]);

  const signUpAction = useCallback(
    async (email: string, password: string, repeatPassword: string) => {
      pushLoader();

      // const axiosResponse = await callEndpoint<ApiUser>(
      //   authService.signUp(email, password, repeatPassword)
      // );
      const axiosResponse = await signUpMutation({
        email,
        password,
        repeatPassword,
      });

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        popLoader();

        return axiosResponse.success;
      }

      setItem('user', axiosResponse.responseObject);

      signUp(axiosResponse.responseObject);
      popLoader();

      return axiosResponse.success;
    },
    [pushLoader, signUpMutation, signUp, popLoader]
  );

  return {
    login: loginAction,
    logout: logoutAction,
    signUp: signUpAction,
    handlerCurrentUser,
  };
};
