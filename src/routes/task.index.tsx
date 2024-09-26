import { createFileRoute } from '@tanstack/react-router';

import { ListTasks } from '@/app/Tasks/pages/ListTasks';

export const Route = createFileRoute('/task/')({
  component: ListTasks,
});
