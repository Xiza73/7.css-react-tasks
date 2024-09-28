import { QueryKey, useQuery as useRQQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useLoader } from '../context/loader';
import { useToast } from '../context/toast';
import { QueryParams } from '../models/axios.model';
import { getId } from '../utils/uuid.util';

interface UseQueryProps {
  queryKey: QueryKey;
  queryFn: any;
}

export const useQuery = <T, K>({
  queryKey,
  queryFn,
  enabled = true,
  showSuccess,
  showError,
}: UseQueryProps & Partial<QueryParams<T>>) => {
  const { pushError, pushSuccess } = useToast();
  const { setIsFetching } = useLoader();

  const { data, error, isFetching, isLoading, refetch } = useRQQuery<K>({
    queryKey,
    queryFn,

    enabled,
  });

  useEffect(() => {
    if (error && showError) {
      pushError(getId(), 'something went wrong');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (data && showSuccess) {
      pushSuccess(getId(), 'success');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setIsFetching(isLoading || isFetching);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFetching]);

  return { data, error, isFetching, isLoading, refetch };
};
