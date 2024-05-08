import { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import * as tasksApi from '../api/taskApi';
import * as userApi from '../api/userApi';
import { TaskMenu } from '../components/taskMenu';
import { TaskList } from '../components/taskList';
import { TaskForm } from '../components/taskForm';
import type { Task } from '../types/task';

export const Route = createFileRoute('/_auth/tasks/upcoming')({
  component: UpcomingTasksComponent,
})

function UpcomingTasksComponent() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [showModal, setShowModal] = useState(false)

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

  const openModal = () => {
    setShowModal(true)
  }

  const handleFormSubmit = () => {
    preload() // trigger re-render by fetching updated tasks
  }

  return (
    <>
      <div className='flex content-center h-screen bg-taskBackground bg-no-repeat bg-cover'>
        <div className='flex-shrink-0'>
          <TaskMenu />
        </div>
        <div className='w-[80vw] flex flex-col justify-between m-auto mt-2 md:mt-4 p-4 rounded'>
          <h1 className='text-xl md:text-4xl'>Hello, {user.user_name}</h1>
          <h2 className='text-xl mt-2 pb-2 md:text-2xl md:mt-4 font-kumbh-bold'>Tasks</h2>
          <h2 className='text-base mt-2 pb-2 md:text-xl md:mt-4 font-kumbh-bold'>Upcoming</h2>
          <button className='self-start my-4 py-2 w-[25%] rounded-md text-white bg-black' onClick={openModal}>
            Add New Task
          </button>
          <div className=''>
            <div className='md:mr-4'>
              {loading ? <p>Tasks Loading...</p> : <TaskList tasks={tasks} />}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed justify-center items-center top-0 left-0 w-[100%] h-full bg-black bg-opacity-60">
          <div className="">
            <TaskForm closeModal={() => setShowModal(false)} onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </>
  )
}
