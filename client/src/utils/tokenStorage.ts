const key = 'mindbloom.auth.token'

export const getLocalStorageToken = () => {
  return localStorage.getItem(key)
}

export const setLocalStorageToken = (token: string | null) => {
  if (token) {
    localStorage.setItem(key, token)
  } else {
    localStorage.removeItem(key)
  }
}