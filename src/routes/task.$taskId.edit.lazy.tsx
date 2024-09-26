import { createLazyFileRoute } from '@tanstack/react-router';

import { CreateUpdateTask } from '@/app/Tasks/pages/CreateUpdateTask';

export const Route = createLazyFileRoute('/task/$taskId/edit')({
  component: CreateUpdateTask,
});
