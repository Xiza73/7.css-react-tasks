export const TasksRoute = {
  CREATE: '/create',
} as const;
export type TasksRoute = (typeof TasksRoute)[keyof typeof TasksRoute];
