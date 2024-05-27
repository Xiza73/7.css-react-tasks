import { Task } from '../../models/task.model';

export interface TaskState {
  tasks: Task[];
  total: number;
  page: number;
  pages: number;
  search: string;
  limit: number;
}

export interface TaskContextProps extends TaskState {
  setTasks: (tasks: Task[]) => void;
  setTotal: (total: number) => void;
  setPage: (page: number) => void;
  setPages: (pages: number) => void;
  setSearch: (search: string) => void;
  handleTasks: (page?: number) => void;
  handleShowMore: () => void;
}

export interface TaskProviderProps {
  children: React.ReactNode;
}
