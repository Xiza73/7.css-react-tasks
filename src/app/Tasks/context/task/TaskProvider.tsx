import { useCallback, useEffect, useMemo, useReducer } from 'react';

import { initialPagination } from '@/shared/utils/service.util';

import { Task } from '../../models/task.model';
import { useGetTasksQuery } from '../../services/queries/task.query';
import { TaskActions } from './actions';
import { TaskProviderProps } from './interfaces';
import { taskReducer } from './reducer';
import { initialState, TaskContext } from './TaskContext';

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { search, page, limit } = state;
  const { data: listTasksData } = useGetTasksQuery({
    params: {
      ...(search && { title: search }),
      page,
      limit,
    },
    enabled: !!page,
  });

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
    async (page = 1) => setPage(page),

    [setPage]
  );

  const handleShowMore = useCallback(() => {
    const { page, pages } = state;

    if (page >= pages) return;

    handleTasks(page + 1);
  }, [handleTasks, state]);

  useEffect(() => {
    if (listTasksData?.success && listTasksData?.responseObject) {
      const { data, total, page, pages } = listTasksData.responseObject;

      page === initialPagination.page
        ? setTasks(data)
        : setTasks([...state.tasks, ...data]);
      setTotal(total);
      setPage(page);
      setPages(pages);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listTasksData]);

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
