import { axios, getHeaders } from '@/config/axios.config';
import { loadAbort } from '@/shared/utils/load-abort.util';
import { buildWithQueryParams, initialPagination } from '@/shared/utils/service.util';

const MODULE = '/task';

export const createTask = (title: string, description: string) => {
  const controller = loadAbort();

  const call = axios.post(`${MODULE}`, { title, description }, { signal: controller.signal, headers: getHeaders() });

  return { call, controller };
};

export const getTasks = ({
  title,
  page = initialPagination.page,
  limit = initialPagination.limit,
}: {
  title?: string;
  page?: number;
  limit?: number;
}) => {
  const controller = loadAbort();
  const url = buildWithQueryParams(`${MODULE}`, { title, page, limit });

  const call = axios.get(url, { signal: controller.signal, headers: getHeaders() });

  return { call, controller };
};
