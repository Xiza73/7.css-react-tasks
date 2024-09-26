import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/main')({
  component: () => <>Hi</>,
});
