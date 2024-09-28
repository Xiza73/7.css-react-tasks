import { useQueryClient } from '@tanstack/react-query';

import { useMutation } from '@/shared/hooks/useMutation';
import { useQuery } from '@/shared/hooks/useQuery';
import {
  AxiosData,
  QueryBody,
  QueryId,
  QueryParams,
  SuccessResponse,
} from '@/shared/models/axios.model';

import { taskAdapter } from '../../adapters/task.adapter';
import {
  CreateTaskBody,
  UpdateTaskBody,
} from '../../models/create-update.model';
import { GetTaskParams, ListTask, Task } from '../../models/task.model';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../api/task.service';

export const useCreateTaskMutation = (query?: QueryBody<undefined>) => {
  const queryClient = useQueryClient();

  return useMutation<undefined, SuccessResponse>({
    ...query,
    mutationFn: async (params: CreateTaskBody) => {
      const data = await createTask(params);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] });
    },
  });
};

export const useGetTasksQuery = (query: QueryParams<GetTaskParams>) =>
  useQuery<GetTaskParams, AxiosData<ListTask>>({
    ...query,
    queryKey: ['getTasks', { ...query }],
    queryFn: async () => {
      if (!query.params) return;

      const data = await getTasks(query.params);

      const tasks = data.responseObject.data.map(taskAdapter);

      return {
        ...data,
        responseObject: {
          ...data.responseObject,
          data: tasks,
        },
      };
    },
  });

export const useGetTaskQuery = (query: QueryId) =>
  useQuery<string, AxiosData<Task>>({
    ...query,
    queryKey: ['getTask', { ...query }],
    queryFn: async () => {
      if (!query.id) return;

      const data = await getTask(query.id);

      const task = data.responseObject
        ? taskAdapter(data.responseObject)
        : null;

      return { ...data, responseObject: task };
    },
  });

export const useUpdateTaskMutation = (query?: QueryBody<UpdateTaskBody>) => {
  const queryClient = useQueryClient();

  return useMutation<UpdateTaskBody, SuccessResponse>({
    ...query,
    mutationFn: async (params: UpdateTaskBody) => {
      const data = await updateTask(params);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] });
    },
  });
};

export const useDeleteTaskMutation = (query?: QueryId) => {
  const queryClient = useQueryClient();

  return useMutation<undefined, SuccessResponse>({
    ...query,
    mutationFn: async (params: string) => {
      const data = await deleteTask(params);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTasks'] });
    },
  });
};
