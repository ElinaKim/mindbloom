import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as tasksApi from '../api/taskApi';

export interface TaskFormProps {
  closeModal: () => void
  onFormSubmit: () => void
}

type TaskInputs = {
  task_name: string;
  description: string;
  due_date: string;
}

export function TaskForm({ closeModal, onFormSubmit }: TaskFormProps) {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskInputs>()

  const onSubmit: SubmitHandler<TaskInputs> = async (data) => {
    try {
      setLoading(true)
      await tasksApi.createTask(data.task_name, data.description, data.due_date)
      closeModal()
      onFormSubmit()
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex justify-center mt-[10%] md:mt-[5%]">
      <form
        className='bg-white flex flex-col mt-2 border-light-grey p-2 border-2 rounded w-[50%]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between">
          <h1 className='mt-2 text-xl md:text-4xl'>Task Details:</h1>
          <button
            onClick={closeModal}
            className="text-grey focus:outline-none">
            &#10005;
          </button>
        </div>
        <label
          className='pt-4'
          htmlFor="task_name">
          Task Name
        </label>
        <input
          className='mt-2 py-4 px-2 border-light-grey border-2 rounded'
          type="text"
          placeholder='Add task name'
          aria-invalid={errors.task_name ? "true" : "false"}
          {...register('task_name', { required: true })}
        />
        {errors.task_name?.type === "required" && (
          <small className="text-sm text-red mt-1 pl-1">
            !Please provide a task name
          </small>
        )}
        <label
          className='pt-4'
          htmlFor="description">
          Description
        </label>
        <textarea
          className='mt-2 py-4 px-2 border-light-grey border-2 rounded'
          placeholder='Add task description'
          {...register('description', { required: true })}
        />
        {errors.description?.type === "required" && (
          <small className="text-sm text-red mt-1 pl-1">
            !Please provide description
          </small>
        )}
        <label
          className='pt-4'
          htmlFor='due_date'>
          Due Date
        </label>
        <input
          className='mt-2 py-4 px-1 border-light-grey border-2 rounded'
          type='date'
          id='due_date'
          {...register('due_date', { required: true })}
        />
        {errors.due_date?.type === "required" && (
          <small className='text-sm text-red mt-1 pl-1'>
            !Please provide a due date
          </small>
        )}
        <div className='flex justify-start gap-2'>
          <button
            className='my-4 py-1 px-4 md:px-10 rounded-md text-white bg-black'
            type='submit'>
            Create Your Task
          </button>
        </div>
      </form>
    </div>
  )
}