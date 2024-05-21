import { useCallback, useEffect, useState } from 'react';

import { checkSession } from '@/app/Auth/services/auth.service';

import { useLoader } from '../context/loader';
import { useToast } from '../context/toast';
import { AxiosCall, AxiosData, AxiosError } from '../models/axios.model';
import { getError, getErrorStatus } from '../utils/axios-error.util';
import { getId } from '../utils/uuid.util';

export const useFetchAndLoad = () => {
  const { addLoader, removeLoader } = useLoader();
  const { pushError, pushSuccess } = useToast();

  const [controller, setController] = useState<AbortController | undefined>(undefined);

  const callEndpoint = useCallback(
    async <T>(
      axiosCall: AxiosCall<AxiosData<T>>,
      options: {
        showSuccess?: boolean;
        showError?: boolean;
      } = {
        showSuccess: true,
        showError: true,
      }
    ) => {
      const { showSuccess, showError } = options;

      try {
        if (axiosCall.controller) setController(axiosCall.controller);
        addLoader();

        const result = await axiosCall.call;

        if (!result.data.success) throw new Error(result.data.message);

        removeLoader();

        showSuccess && pushSuccess(getId(), result.data.message || 'Success');

        return result.data;
      } catch (err: unknown) {
        removeLoader();
        const status = getErrorStatus(err as AxiosError);

        const axiosError: AxiosData<null> = {
          message: getError(err as AxiosError),
          success: false,
          responseObject: null,
          statusCode: status,
        };

        showError && pushError(getId(), axiosError.message);

        return axiosError;
      }
    },

    [addLoader, removeLoader, pushSuccess, pushError]
  );

  const callMiddlewareEndpoint = useCallback(async () => {
    try {
      const axiosCall = checkSession();

      if (axiosCall.controller) setController(axiosCall.controller);
      addLoader();

      const result = await axiosCall.call;

      if (!result?.data?.success) throw new Error(result?.data?.message);

      removeLoader();

      return {
        success: true,
        message: result?.data?.message || 'Success',
      };
    } catch (err: unknown) {
      removeLoader();
      const status = getErrorStatus(err as AxiosError);

      const axiosError: AxiosData<null> = {
        message: 'Session expired. Please login again.',
        success: false,
        responseObject: null,
        statusCode: status,
      };

      pushError(getId(), axiosError.message);

      return axiosError;
    }
  }, [addLoader, removeLoader, pushError]);

  useEffect(() => {
    const cancelEndpoint = () => {
      controller && controller.abort();
    };

    return () => {
      cancelEndpoint();
    };
  }, [controller, removeLoader]);

  return { callEndpoint, callMiddlewareEndpoint };
};
