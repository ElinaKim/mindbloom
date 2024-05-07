import { ApiClient } from './axiosinstance'
import type { Task } from '../types/task'
import { getLocalStorageToken } from '../utils/tokenStorage'

interface TaskPayload {
  task_id?: number,
  task_name?: string,
  description?: string,
  due_date?: number
}

export const getTodayTasks = async (): Promise<Task[]> => {
  try {
    const authToken = getLocalStorageToken()
    const response = await ApiClient.get(`tasks/today`,
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    )
    return response.data
  } catch (error) {
    console.error("Error fetching today's tasks", error)
    return []
  }
}

export const getTaskById = async ({ task_id }: TaskPayload): Promise<Task | null> => {
  try {
    const authToken = getLocalStorageToken()
    const response = await ApiClient.get(`tasks/${task_id}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    return response.data
  } catch (error) {
    console.error("Error fetching a task", error)
    return null
  }
}

export const getUpcomingTasks = async (): Promise<Task[]> => {
  try {
    const authToken = getLocalStorageToken()
    const response = await ApiClient.get(`tasks/upcoming`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
    return response.data
  } catch (error) {
    console.error("Error fetching upcoming tasks", error)
    return []
  }
}

export const updateTask = async ({ task_id, task_name, description, due_date }: TaskPayload) => {
  try {
    const authToken = getLocalStorageToken()
    const response = await ApiClient.put(`tasks/update-task/${task_id}`, {
      task_name: task_name,
      description: description,
      due_date: due_date
    },
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    return response.data
  } catch (error) {
    console.error("Error updating a task", error)
  }
}

export const createTask = async ({ task_name, description, due_date }: TaskPayload) => {
  try {
    const authToken = getLocalStorageToken()
    const response = await ApiClient.post(`/tasks/create-task`,
      {
        task_name: task_name,
        description: description,
        due_date: due_date
      },
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    )
    return response
  } catch (error) {
    console.error("Error creating a task", error)
  }
}

export const deleteTask = async ({ task_id }: TaskPayload) => {
  try {
    const authToken = getLocalStorageToken()
    await ApiClient.delete(`/tasks/delete-task/${task_id}`,
      {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    )
  } catch (error) {
    console.error("Error deleting a task", error)
  }
}