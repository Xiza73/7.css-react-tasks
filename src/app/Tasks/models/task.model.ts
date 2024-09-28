import { AxiosData } from '@/shared/models/axios.model';

import { TaskStatus } from './task-status.model';

export interface ApiTask {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ApiListTask {
  data: ApiTask[];
  total: number;
  pages: number;
  page: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ListTask {
  data: Task[];
  total: number;
  pages: number;
  page: number;
}

export interface GetTaskParams {
  title?: string;
  page?: number;
  limit?: number;
}

export type GetTasksResponse = AxiosData<ApiListTask>;

export type GetTaskResponse = AxiosData<ApiTask>;
