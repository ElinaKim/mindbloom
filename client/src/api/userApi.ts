import { ApiClient } from './axiosinstance'
import { getLocalStorageToken } from '../utils/tokenStorage'

export const login = async (email: string, password: string) => {
  const res = await ApiClient.post('users/login', {
    email,
    password
  })
  return res.data.token
}

export const register = async (user_name: string, email: string, password: string) => {
  const res = await ApiClient.post('users/register', {
    user_name,
    email,
    password
  })
  return res.data
}

export const profile = async () => {
  const authToken = getLocalStorageToken()
  const res = await ApiClient.get('users/profile',
    {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }
  )
  return res.data
}
