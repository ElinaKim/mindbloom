import axios from 'axios'

const API_PORT = process.env.REACT_APP_API_PORT
const API_URL = process.env.REACT_APP_API_URL

interface TaskPayload {
    task_id: number,
    task_name: string,
    description: string,
    due_date: number
}

export const getTodayTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}${API_PORT}/tasks/today`)
        return response.data
    } catch (error) {
        console.error("Error fetching today's tasks", error)
    }
}

export const getTaskById = async ({ task_id }: TaskPayload) => {
    try {
        const response = await axios.get(`${API_URL}${API_PORT}/tasks/${task_id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching a task", error)
    }
}

export const getUpcomingTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}${API_PORT}/tasks/upcoming`)
        return response.data
    } catch (error) {
        console.error("Error fetching upcoming tasks", error)
    }
}

export const updateTask = async ({ task_id, task_name, description, due_date }: TaskPayload) => {
    try {
        const response = await axios.put(`${API_URL}${API_PORT}/update-task/${task_id}`, {
            task_name: task_name,
            description: description,
            due_date: due_date
        })
        return response.data
    } catch (error) {
        console.error("Error updating a task", error)
    }
}

export const createTask = async ({ task_name, description, due_date }: TaskPayload) => {
    try {
        const response = await axios.post(`${API_URL}${API_PORT}/create-task`, {
            task_name: task_name,
            description: description,
            due_date: due_date
        })
        return response
    } catch (error) {
        console.error("Error creating a task", error)
    }
}


export const deleteTask = async ({ task_id }: TaskPayload) => {
    try {
        await axios.delete(`${API_URL}${API_PORT}/delete-task/${task_id}`)
    } catch (error) {
        console.error("Error deleting a task", error)
    }
}