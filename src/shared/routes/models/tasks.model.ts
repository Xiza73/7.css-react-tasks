export const TasksRoute = {
  LIST: '/',
  CREATE: '/create',
  EDIT: '/edit/:id',
} as const;
export type TasksRoute = (typeof TasksRoute)[keyof typeof TasksRoute];
