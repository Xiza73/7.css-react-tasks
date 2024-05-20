export const HomeRoute = {
  MAIN: '',
} as const;
export type HomeRoute = (typeof HomeRoute)[keyof typeof HomeRoute];
