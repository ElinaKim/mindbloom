import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tasks/upcoming')({
  component: () => <div>Hello /tasks/upcoming!</div>
})