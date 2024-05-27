import { dateFormat } from '@/shared/utils/date.util';

import { ApiTask, Task } from '../models/task.model';

export const taskAdapter = (apiTask: ApiTask): Task => {
  return {
    id: apiTask._id,
    title: apiTask.title,
    description: apiTask.description,
    status: apiTask.status,
    createdAt: dateFormat(apiTask.createdAt),
    updatedAt: dateFormat(apiTask.updatedAt),
  };
};
