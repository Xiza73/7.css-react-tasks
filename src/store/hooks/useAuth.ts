import { useCallback } from 'react';

import { adapterUser } from '@/app/Auth/adapters/auth.adapter';
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
  const { callEndpoint } = useFetchAndLoad();

  const handlerCurrentUser = useCallback(async () => {
    addLoader();
    let user = storage.getStorage('user');

    if (!user) {
      const axiosResponse = await callEndpoint<ApiUser>(authService.loginSuccess(), false);

      if (!axiosResponse.success || !axiosResponse.responseObject) {
        dispatch(endProcessing());
        removeLoader();

        return;
      }

      user = adapterUser(axiosResponse.responseObject);
      storage.setStorage('user', user);
    }

    dispatch(login(user));
    dispatch(endProcessing());
    removeLoader();
  }, [callEndpoint, dispatch, addLoader, removeLoader]);

  const loginAction = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      addLoader();

      const axiosResponse = await callEndpoint<ApiUser>(authService.signIn(email, password));

      if (axiosResponse.success && axiosResponse.responseObject) {
        storage.setStorage('user', adapterUser(axiosResponse.responseObject));

        dispatch(login(adapterUser(axiosResponse.responseObject)));
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

      dispatch(signUp(adapterUser(axiosResponse.responseObject)));
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
