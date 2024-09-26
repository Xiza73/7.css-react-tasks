import { createLazyFileRoute } from '@tanstack/react-router';

import { Login } from '@/app/Auth/pages/Login/Login';

export const Route = createLazyFileRoute('/auth/login')({
  component: Login,
});
