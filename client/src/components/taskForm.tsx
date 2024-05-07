import { useState } from 'react'
import * as tasksApi from '../api/taskApi'

export interface TaskFormProps {
  closeModal: () => void
}

export function TaskForm({ closeModal }: TaskFormProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    const form = event.currentTarget
    const task_name = form.task_name.value;
    const description = form.description.value;
    const due_date = form.due_date.value

    try {
      const newTask = await tasksApi.createTask({ task_name, description, due_date })
      console.log(newTask)
      form.reset();
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-center mt-[5%]">
      <form
        className='bg-white flex flex-col mt-2 border-light-grey p-2 border-2 rounded w-[50%]'
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <h1 className='mt-2 text-xl md:text-4xl'>Task Details:</h1>
          <button onClick={closeModal} className="text-grey focus:outline-none">&#10005;</button>
        </div>
        <input className='mt-2 py-4 px-1 border-light-grey border-2 rounded' name='task_name' type="text" placeholder='Add task name'></input>
        <textarea className='mt-2 py-4 px-1 border-light-grey border-2 rounded' name='description' placeholder='Add task description'></textarea>
        <label htmlFor="due_date">Due Date:</label>
        <input className='mt-2 py-4 px-1 border-light-grey border-2 rounded' name='due_date' type="date" id="due_date" />
        <div className='flex justify-evenly gap-2'>
          <button className='my-4 py-1 px-4 md:px-10 rounded-md text-white bg-pink'>Delete</button>
          <button className='my-4 py-1 px-4 md:px-10 rounded-md text-white bg-blue' type='submit'>Add Task</button>
        </div>
      </form>
    </div>
  )
}