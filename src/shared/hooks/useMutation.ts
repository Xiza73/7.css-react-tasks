import {
  MutationFunction,
  useMutation as useRQMutation,
} from '@tanstack/react-query';

import { useLoader } from '../context/loader';
import { useToast } from '../context/toast';
import { AxiosData, AxiosError, QueryBody } from '../models/axios.model';
import { AnyFunction } from '../models/function.model';
import { getError } from '../utils/axios-error.util';
import { noopFunction } from '../utils/noopFunction';
import { getId } from '../utils/uuid.util';

interface UseMutationProps {
  mutationFn: MutationFunction<any, any>;
  onSuccess?: AnyFunction;
}

export const useMutation = <T, K extends AxiosData<any>>({
  mutationFn,
  onSuccess = noopFunction,
  showSuccess,
  showError,
}: UseMutationProps & Partial<QueryBody<T>>) => {
  const { pushError, pushSuccess } = useToast();
  const { pushLoader, popLoader } = useLoader();

  return useRQMutation({
    mutationFn,
    onMutate: () => {
      pushLoader();
    },
    onSettled: () => {
      popLoader();
    },
    onSuccess: (data: K) => {
      showSuccess && pushSuccess(getId(), data.message || 'Success');
      onSuccess();
    },
    onError: (err: unknown) => {
      showError && pushError(getId(), getError(err as AxiosError));

      return err;
    },
  });
};
