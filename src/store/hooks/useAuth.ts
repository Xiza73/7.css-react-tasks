import { useCallback } from 'react';

import { userAdapter } from '@/app/Auth/adapters/auth.adapter';
import { ApiUser, User } from '@/app/Auth/models/auth.model';
import * as authService from '@/app/Auth/services/auth.service';
import { getItem, removeItem, setItem } from '@/lib/local-storage';
import { useLoader } from '@/shared/context/loader';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';

import { useAuthStore } from '../useAuthStore';

export const useAuth = () => {
  const { endProcessing, login, logout, signUp } = useAuthStore(
    (state) => state
  );
  const { addLoader, removeLoader } = useLoader();
  const { callEndpoint, callMiddlewareEndpoint } = useFetchAndLoad();

  const handlerCurrentUser = useCallback(async () => {
    addLoader();
    let user: User | null = getItem('user');

    if (user) {
      const middlewareResponse = await callMiddlewareEndpoint();
      if (!middlewareResponse.success) {
        removeItem('user');

        endProcessing();
        removeLoader();

        return;
      }
    }

    if (!user) {
      const axiosResponse = await callEndpoint<ApiUser>(
        authService.loginSuccess(),
        { showError: false }
      );

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        endProcessing();
        removeLoader();

        return;
      }

      user = userAdapter(axiosResponse.responseObject);
      setItem('user', user);
    }

    login(user);
    endProcessing();
    removeLoader();
  }, [
    addLoader,
    login,
    endProcessing,
    removeLoader,
    callMiddlewareEndpoint,
    callEndpoint,
  ]);

  const loginAction = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      addLoader();

      const axiosResponse = await callEndpoint<ApiUser>(
        authService.signIn(email, password)
      );

      if (axiosResponse.success && axiosResponse.responseObject) {
        setItem('user', userAdapter(axiosResponse.responseObject));

        login(userAdapter(axiosResponse.responseObject));
      }

      removeLoader();

      return axiosResponse.success;
    },
    [addLoader, callEndpoint, login, removeLoader]
  );

  const logoutAction = useCallback(async () => {
    addLoader();

    const axiosResponse = await callEndpoint<any>(authService.logout());

    removeItem('user');
    logout();
    removeLoader();

    return axiosResponse.success;
  }, [addLoader, callEndpoint, logout, removeLoader]);

  const signUpAction = useCallback(
    async (email: string, password: string, repeatPassword: string) => {
      addLoader();

      const axiosResponse = await callEndpoint<ApiUser>(
        authService.signUp(email, password, repeatPassword)
      );

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        removeLoader();

        return axiosResponse.success;
      }

      setItem('user', axiosResponse.responseObject);

      signUp(userAdapter(axiosResponse.responseObject));
      removeLoader();

      return axiosResponse.success;
    },
    [addLoader, callEndpoint, signUp, removeLoader]
  );

  return {
    login: loginAction,
    logout: logoutAction,
    signUp: signUpAction,
    handlerCurrentUser,
  };
};
