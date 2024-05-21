import { ApiTask, Task } from '../models/task.model';

export const taskAdapter = (apiTask: ApiTask): Task => {
  return {
    id: apiTask._id,
    title: apiTask.title,
    description: apiTask.description,
    status: apiTask.status,
    createdAt: apiTask.createdAt,
    updatedAt: apiTask.updatedAt,
  };
};
