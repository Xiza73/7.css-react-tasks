import { useCallback } from 'react';

import { userAdapter } from '@/app/Auth/adapters/auth.adapter';
import { ApiUser } from '@/app/Auth/models/auth.model';
import * as authService from '@/app/Auth/services/auth.service';
import { useLoader } from '@/shared/context/loader';
import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';
import * as storage from '@/shared/utils/local-storage.util';

import { endProcessing, login, logout, signUp } from '..';
import { useDispatch } from '.';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { addLoader, removeLoader } = useLoader();
  const { callEndpoint, callMiddlewareEndpoint } = useFetchAndLoad();

  const handlerCurrentUser = useCallback(async () => {
    addLoader();
    let user = storage.getStorage('user');

    if (user) {
      const middlewareResponse = await callMiddlewareEndpoint();
      if (!middlewareResponse.success) {
        storage.removeStorage('user');

        dispatch(endProcessing());
        removeLoader();

        return;
      }
    }

    if (!user) {
      const axiosResponse = await callEndpoint<ApiUser>(authService.loginSuccess(), { showError: false });

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        dispatch(endProcessing());
        removeLoader();

        return;
      }

      user = userAdapter(axiosResponse.responseObject);
      storage.setStorage('user', user);
    }

    dispatch(login(user));
    dispatch(endProcessing());
    removeLoader();
  }, [addLoader, dispatch, removeLoader, callMiddlewareEndpoint, callEndpoint]);

  const loginAction = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      addLoader();

      const axiosResponse = await callEndpoint<ApiUser>(authService.signIn(email, password));

      if (axiosResponse.success && axiosResponse.responseObject) {
        storage.setStorage('user', userAdapter(axiosResponse.responseObject));

        dispatch(login(userAdapter(axiosResponse.responseObject)));
      }

      removeLoader();

      return axiosResponse.success;
    },
    [addLoader, callEndpoint, removeLoader, dispatch]
  );

  const logoutAction = useCallback(async () => {
    addLoader();

    const axiosResponse = await callEndpoint<any>(authService.logout());

    storage.removeStorage('user');
    dispatch(logout());
    removeLoader();

    return axiosResponse.success;
  }, [callEndpoint, dispatch, addLoader, removeLoader]);

  const signUpAction = useCallback(
    async (email: string, password: string, repeatPassword: string) => {
      addLoader();

      const axiosResponse = await callEndpoint<ApiUser>(authService.signUp(email, password, repeatPassword));

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        removeLoader();

        return axiosResponse.success;
      }

      storage.setStorage('user', axiosResponse.responseObject);

      dispatch(signUp(userAdapter(axiosResponse.responseObject)));
      removeLoader();

      return axiosResponse.success;
    },
    [callEndpoint, dispatch, addLoader, removeLoader]
  );

  return {
    login: loginAction,
    logout: logoutAction,
    signUp: signUpAction,
    handlerCurrentUser,
  };
};
