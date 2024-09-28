import { z } from 'zod';

import { AxiosData } from '@/shared/models/axios.model';

import { TaskStatus } from './task-status.model';

export const taskFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.nativeEnum(TaskStatus).optional(),
});
export type TaskFormSchema = z.infer<typeof taskFormSchema>;

export interface CreateTaskBody {
  title: string;
  description: string;
}

export interface UpdateTaskBody extends CreateTaskBody {
  id: string;
  status: TaskStatus;
}

export type CreateTaskResponse = AxiosData<null>;
