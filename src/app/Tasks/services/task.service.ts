import { axios, getHeaders } from '@/config/axios.config';
import { loadAbort } from '@/shared/utils/load-abort.util';

const MODULE = '/task';

export const createTask = (title: string, description: string) => {
  const controller = loadAbort();

  const call = axios.post(`${MODULE}`, { title, description }, { signal: controller.signal, headers: getHeaders() });

  return { call, controller };
};
