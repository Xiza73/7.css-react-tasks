export const ModuleRoute = {
  HOME: '/',
  AUTH: '/auth',
} as const;
export type ModuleRoute = (typeof ModuleRoute)[keyof typeof ModuleRoute];
