import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export const ApiClient = axios.create({
  baseURL: `${apiUrl}/`,
  timeout: 1000,
})
