import { TaskCheckbox } from './taskCheckbox';
import DeleteIcon from '../assets/icons/delete.svg';
import type { Task } from '../types/task';
import * as tasksApi from '../api/taskApi';
import { useState } from 'react';

export interface TaskListProps {
  tasks: Task[]
  onTaskClick: (taskId: number) => void
}

export function TaskList({ tasks: initialTasks, onTaskClick }: TaskListProps) {
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

  const handleEditClick = (taskId: number) => {
    onTaskClick(taskId)
  }

  const handleDeleteClick = async (task_id: number) => {
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
          const taskDueDate = new Date(task.due_date)
          return (
            <div
              key={task.id}
              className='flex justify-between items-center bg-white border-2 pt-4 p-2 mt-2 rounded hover:border-pink hover:border-2 shadow'
            >
              <div className='flex'>
                <TaskCheckbox
                  isChecked={task.isChecked || false}
                  onCheckboxChange={() => handleCheckboxChange(task.id)} />
                <div className='flex flex-col'>
                  <p
                    className={`place-self-center pl-4 w-[100%] text-base md:text-xl ${task.isChecked ? 'line-through text-grey' : ''}`}>
                    {task.task_name}
                  </p>
                  <p className='pl-4 text-grey'>Due: {taskDueDate.toLocaleString()}</p>
                </div>
              </div>
              <button
                onClick={() => handleEditClick(task.id)}
                className='self-end'
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(task.id)}
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
