import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tasks/today')({
  component: () => <div>Hello /tasks/today!</div>
})