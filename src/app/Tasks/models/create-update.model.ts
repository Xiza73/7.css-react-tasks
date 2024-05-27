import { z } from 'zod';

import { TaskStatus } from './task-status.model';

export const taskFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  status: z.nativeEnum(TaskStatus).optional(),
});
export type TaskFormSchema = z.infer<typeof taskFormSchema>;
