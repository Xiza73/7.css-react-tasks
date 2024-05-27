import { useCallback, useMemo, useReducer } from 'react';

import { useFetchAndLoad } from '@/shared/hooks/useFetchAndLoad';
import { initialPagination } from '@/shared/utils/service.util';

import { taskAdapter } from '../../adapters/task.adapter';
import { ApiListTask, ApiTask, Task } from '../../models/task.model';
import { getTasks } from '../../services/task.service';
import { TaskActions } from './actions';
import { TaskProviderProps } from './interfaces';
import { taskReducer } from './reducer';
import { initialState, TaskContext } from './TaskContext';

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { callEndpoint } = useFetchAndLoad();

  const setTasks = useCallback((tasks: Task[]) => {
    dispatch({ type: TaskActions.SET_TASKS, payload: tasks });
  }, []);

  const setTotal = useCallback((total: number) => {
    dispatch({ type: TaskActions.SET_TOTAL, payload: total });
  }, []);

  const setPage = useCallback((page: number) => {
    dispatch({ type: TaskActions.SET_PAGE, payload: page });
  }, []);

  const setPages = useCallback((pages: number) => {
    dispatch({ type: TaskActions.SET_PAGES, payload: pages });
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({ type: TaskActions.SET_SEARCH, payload: search });
  }, []);

  const handleTasks = useCallback(
    async (page = 1) => {
      const { search, limit, tasks } = state;

      const response = await callEndpoint<ApiListTask>(
        getTasks({
          ...(search && { title: search }),
          page,
          limit,
        })
      );

      if (response.success && response.responseObject?.page === page) {
        const transformedTasks = (response.responseObject?.data || []).map(
          (task: ApiTask) => taskAdapter(task)
        );
        page === initialPagination.page
          ? setTasks(transformedTasks)
          : setTasks([...tasks, ...transformedTasks]);
        setTotal(response.responseObject?.total || 0);
        setPages(response.responseObject?.pages || 0);
        setPage(response.responseObject?.page || 0);
      }
    },
    [state, callEndpoint, setTasks, setTotal, setPages, setPage]
  );

  const handleShowMore = useCallback(() => {
    const { page, pages } = state;

    if (page >= pages) return;

    handleTasks(page + 1);
  }, [handleTasks, state]);

  const value = useMemo(
    () => ({
      ...state,
      setTasks,
      setTotal,
      setPage,
      setPages,
      setSearch,
      handleTasks,
      handleShowMore,
    }),
    [
      state,
      setTasks,
      setTotal,
      setPage,
      setPages,
      setSearch,
      handleTasks,
      handleShowMore,
    ]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
