import { ApiUser, User } from '../models/auth.model';

export const userAdapter = (apiUser: ApiUser): User => {
  const origin = apiUser.local ? 'local' : 'google';

  return {
    id: apiUser._id,
    email: apiUser[origin]?.email || '',
    name: '',
    ...(origin === 'google' && { name: apiUser.google?.name || '' }),
    origin,
    token: apiUser.token,
    createdAt: apiUser.createdAt,
    updatedAt: apiUser.updatedAt,
  };
};
