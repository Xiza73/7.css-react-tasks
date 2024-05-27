import { Task } from '../../models/task.model';

export const TaskActions = {
  SET_TASKS: 'SET_TASKS',
  SET_SEARCH: 'SET_SEARCH',
  SET_PAGE: 'SET_PAGE',
  SET_TOTAL: 'SET_TOTAL',
  SET_PAGES: 'SET_PAGES',
} as const;
export type TaskActions = (typeof TaskActions)[keyof typeof TaskActions];

export interface SetTasksAction {
  type: typeof TaskActions.SET_TASKS;
  payload: Task[];
}

export interface SetSearchAction {
  type: typeof TaskActions.SET_SEARCH;
  payload: string;
}

export interface SetPageAction {
  type: typeof TaskActions.SET_PAGE;
  payload: number;
}

export interface SetTotalAction {
  type: typeof TaskActions.SET_TOTAL;
  payload: number;
}

export interface SetPagesAction {
  type: typeof TaskActions.SET_PAGES;
  payload: number;
}

export type TaskAction =
  | SetTasksAction
  | SetSearchAction
  | SetPageAction
  | SetTotalAction
  | SetPagesAction;
