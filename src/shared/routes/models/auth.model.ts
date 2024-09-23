export const AuthRoute = {
  LOGIN: '/login',
} as const;
export type AuthRoute = (typeof AuthRoute)[keyof typeof AuthRoute];
