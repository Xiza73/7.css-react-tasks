import {
  SetPageAction,
  SetPagesAction,
  SetSearchAction,
  SetTasksAction,
  SetTotalAction,
  TaskAction,
  TaskActions,
} from './actions';
import { TaskState } from './interfaces';

type TaskHandler = (state: TaskState, action: TaskAction) => TaskState;

const taskReducerHandler: Record<TaskActions, TaskHandler> = {
  [TaskActions.SET_PAGE]: (state, action) => ({
    ...state,
    page: (action as SetPageAction).payload,
  }),

  [TaskActions.SET_SEARCH]: (state, action) => ({
    ...state,
    search: (action as SetSearchAction).payload,
  }),

  [TaskActions.SET_TASKS]: (state, action) => ({
    ...state,
    tasks: (action as SetTasksAction).payload,
  }),

  [TaskActions.SET_TOTAL]: (state, action) => ({
    ...state,
    total: (action as SetTotalAction).payload,
  }),

  [TaskActions.SET_PAGES]: (state, action) => ({
    ...state,
    pages: (action as SetPagesAction).payload,
  }),
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState =>
  taskReducerHandler[action.type](state, action) ?? state;
