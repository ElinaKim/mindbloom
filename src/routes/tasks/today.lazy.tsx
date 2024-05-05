import { createLazyFileRoute } from '@tanstack/react-router'
import { TaskMenu } from '../../components/taskMenu'
import { TaskList } from '../../components/taskList'

export const Route = createLazyFileRoute('/tasks/today')({
  component: Today,
})

function Today() {
  
  return (
    <>
    <div className='flex'>
      <TaskMenu />
      <h1 className='m-8'>Hello, userName</h1>
      <TaskList />
    </div>
    </>
  )
}