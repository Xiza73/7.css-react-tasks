import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

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
    async <T>(axiosCall: AxiosCall<AxiosData<T>>, showToast = true) => {
      if (axiosCall.controller) setController(axiosCall.controller);
      addLoader();

      let result = {} as AxiosResponse<AxiosData<T>>;

      try {
        result = await axiosCall.call;

        if (!result.data.success) throw new Error(result.data.message);
      } catch (err: unknown) {
        removeLoader();

        const axiosError: AxiosData<null> = {
          message: getError(err as AxiosError),
          success: false,
          responseObject: null,
          statusCode: getErrorStatus(err as AxiosError),
        };

        showToast && pushError(getId(), axiosError.message);

        return axiosError;
      }

      removeLoader();

      showToast && pushSuccess(getId(), result.data.message || 'Success');

      return result.data;
    },

    [pushError, pushSuccess, addLoader, removeLoader]
  );

  useEffect(() => {
    const cancelEndpoint = () => {
      controller && controller.abort();
    };

    return () => {
      cancelEndpoint();
    };
  }, [controller, removeLoader]);

  return { callEndpoint };
};
