import { api } from '@/lib/api';
import { SuccessResponse } from '@/shared/models/axios.model';
import {
  buildWithQueryParams,
  initialPagination,
} from '@/shared/utils/service.util';

import {
  CreateTaskBody,
  CreateTaskResponse,
  UpdateTaskBody,
} from '../../models/create-update.model';
import {
  GetTaskParams,
  GetTaskResponse,
  GetTasksResponse,
} from '../../models/task.model';

const MODULE = '/task';

export const createTask = async (props: CreateTaskBody) => {
  const { data } = await api.post<CreateTaskResponse>(`${MODULE}`, props);

  return data;
};

export const getTasks = async ({
  title,
  page = initialPagination.page,
  limit = initialPagination.limit,
}: GetTaskParams) => {
  const url = buildWithQueryParams(`${MODULE}`, { title, page, limit });
  const { data } = await api.get<GetTasksResponse>(url);

  return data;
};

export const getTask = async (id: string) => {
  const { data } = await api.get<GetTaskResponse>(`${MODULE}/${id}`);

  return data;
};

export const updateTask = async ({
  id,
  title,
  description,
  status,
}: UpdateTaskBody) => {
  const { data } = await api.put<SuccessResponse>(`${MODULE}/${id}`, {
    title,
    description,
    status,
  });

  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await api.delete<SuccessResponse>(`${MODULE}/${id}`);

  return data;
};
