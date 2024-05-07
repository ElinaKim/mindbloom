import { TaskCheckbox } from "./taskCheckbox"
import DeleteIcon from '../assets/icons/delete.svg'
import type { Task } from '../types/task'

const handleDelete = () => { console.log('delete') }

export interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const handleClick = () => {
    handleDelete();
  }
  return (
    <>
      {
        tasks.map(task => {
          return (
            <div className='flex items-center bg-white border-light-grey border-2 pt-4 p-2 rounded hover:border-pink hover:border-2 shadow'>
              <TaskCheckbox />
              <p className='place-self-center p-4 w-[100%]'>{task.task_name}</p>
              <button
                onClick={handleClick}
                className='self-end'
              >
                <img
                  className='my-4 w-[25px]'
                  src={DeleteIcon}
                  alt='delete icon'
                />
              </button>
            </div>
          )
        })
      }
    </>
  )
}
