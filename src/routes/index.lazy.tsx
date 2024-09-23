import { createLazyFileRoute } from '@tanstack/react-router';

import Auth from '@/app/Auth';

export const Route = createLazyFileRoute('/')({
  component: Auth,
});
