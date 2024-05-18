import { ApiUser, User } from '../models/auth.model';

export const adapterUser = (apiUser: ApiUser): User => {
  const origin = apiUser.local ? 'local' : 'google';

  return {
    id: apiUser._id,
    email: apiUser[origin]?.email || '',
    name: '',
    ...(origin === 'google' && { name: apiUser.google?.name || '' }),
    origin,
    createdAt: apiUser.createdAt,
    updatedAt: apiUser.updatedAt,
  };
};
