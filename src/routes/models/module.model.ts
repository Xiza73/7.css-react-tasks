export const ModuleRoute = {
  HOME: '/',
  AUTH: '/auth',
  TASKS: '/tasks',
} as const;
export type ModuleRoute = (typeof ModuleRoute)[keyof typeof ModuleRoute];
