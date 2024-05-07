import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import * as tasksApi from '../api/taskApi'
import * as userApi from '../api/userApi'
import { TaskList } from '../components/taskList'
import type { Task } from '../types/task'

export const Route = createFileRoute('/_auth/tasks/upcoming')({
  component: UpcomingTasksComponent,
})

const currentDate = new Date().toDateString();

function UpcomingTasksComponent() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    preload()
  }, [])

  const preload = async () => {
    setLoading(true)

    try {
      const tasks = await tasksApi.getUpcomingTasks()
      if (tasks && Array.isArray(tasks)) {
        setTasks(tasks)
      }

      const user = await userApi.profile()
      if (user) {
        setUser(user)
      }

    } finally {
      setLoading(false)
    }
  }

  if (!user || loading) {
    return <div>Loading upcoming tasks</div>
  }

  return (
    <div className='flex content-center h-screen bg-taskBackground bg-no-repeat bg-cover'>
      <div className='w-[80vw] flex flex-col justify-between m-auto mt-4 md:mt-8 p-4 shadow'>
        <h1 className='text-xl md:text-4xl'>Hello, {user.user_name}</h1>
        <h2 className='text-xl mt-2 pb-2 md:text-2xl md:mt-4 font-kumbh-bold'>Tasks</h2>
        <h2 className='text-base mt-2 pb-2 md:text-xl md:mt-4 font-kumbh-bold'>Upcoming</h2>
        <div className=''>
          <div className='md:mr-4'>
            {loading ? <p>Tasks Loading...</p> : <TaskList tasks={tasks} />}
          </div>
        </div>
      </div>
    </div>
  )
}
