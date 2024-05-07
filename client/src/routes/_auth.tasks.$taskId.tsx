import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/tasks/$taskId')({
  component: TaskComponent,
})

function TaskComponent() {
  const { taskId } = Route.useParams()

  return (
    <>
      <div>Hello /tasks/tasks/{taskId}</div>
      <button>Update</button>
      <button>Delete</button>
    </>
  )
}
