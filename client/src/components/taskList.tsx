import { TaskCheckbox } from "./taskCheckbox"
import DeleteIcon from '../assets/icons/delete.svg'
import type { Task } from '../types/task'
import * as tasksApi from '../api/taskApi'
import { useState } from 'react';

export interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks: initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleClick = async (task_id: number) => {
    try {
      await tasksApi.deleteTask({ task_id });
      const updatedTasks = tasks.filter(task => task.id !== task_id);
      setTasks(updatedTasks);
      console.log('task deleted successfuly')
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
      {
        tasks.map(task => {
          return (
            <div key={task.id} className='flex items-center bg-white border-light-grey border-2 pt-4 p-2 rounded hover:border-blue hover:border-2 shadow'>
              <TaskCheckbox />
              <p className='place-self-center p-4 w-[100%]'>{task.task_name}</p>
              <button
                onClick={() => handleClick(task.id)}
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
