import axios from 'axios'

const API_PORT = process.env.REACT_APP_API_PORT

export const fetchToDos = async() => {
    try {
        const response = await axios.get(`http://localhost:8080/todo`)
        return response.data
    } catch (error) {
        console.error('Invalid get request', error)
    }
}

export const postToDo = async (name) => {
    try {
        const response = await axios.post(`http://localhost:8080/todo`, { name: name })
        return response.data
    } catch (error) {
        console.error('Invalid get request', error)
    }
}

export const updateToDo = async(id,data) => {
    try {
        const response = await axios.put(`http://localhost:8080/todo/${id}`,data)
        return response.data
    } catch (error) {
        console.error('Invalid put request', error)
    }
}

export const deleteToDoById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/todo/${id}`);
        console.log('Todo item deleted successfully');
    } catch (error) {
        console.error('Invalid delete request', error);
        throw error;
    }
}