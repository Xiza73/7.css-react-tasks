import { createContext } from '@/shared/utils/create-context.util';
import { noopFunction } from '@/shared/utils/noopFunction';
import { initialPagination } from '@/shared/utils/service.util';

import { TaskContextProps, TaskState } from './interfaces';

export const initialState: TaskState = {
  tasks: [],
  total: 0,
  page: 0,
  pages: 0,
  search: '',
  limit: initialPagination.limit,
};

export const [TaskContext, useTask] = createContext<TaskContextProps>(
  {
    ...initialState,
    setTasks: noopFunction,
    setTotal: noopFunction,
    setPage: noopFunction,
    setPages: noopFunction,
    setSearch: noopFunction,
    handleTasks: noopFunction,
    handleShowMore: noopFunction,
  },
  'Task'
);
