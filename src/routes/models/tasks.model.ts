export const TasksRoute = {
  CREATE: '/create',
  LIST: '/',
} as const;
export type TasksRoute = (typeof TasksRoute)[keyof typeof TasksRoute];
