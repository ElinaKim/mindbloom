import { TaskCheckbox } from './taskCheckbox';
import DeleteIcon from '../assets/icons/delete.svg';
import type { Task } from '../types/task';
import * as tasksApi from '../api/taskApi';
import { useState } from 'react';

export interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks: initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const handleCheckboxChange = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

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
            <div
              key={task.id}
              className='flex items-center bg-white border-2 pt-4 p-2 rounded hover:border-pink hover:border-2 shadow'>
              <TaskCheckbox
                isChecked={task.isChecked || false}
                onCheckboxChange={() => handleCheckboxChange(task.id)} />
              <p
                className={`place-self-center pl-4 w-[100%] text-base md:text-xl ${task.isChecked ? 'line-through text-grey' : ''}`}>
                {task.task_name}
              </p>
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
