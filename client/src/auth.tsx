import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode
} from 'react'

import { getLocalStorageToken, setLocalStorageToken } from './utils/tokenStorage';

const AuthContext = createContext<AuthContext | null>(null)

export interface AuthContext {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
  token: string | null
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(getLocalStorageToken())
  const isAuthenticated = !!token

  const logout = useCallback(() => {
    setToken(null)
    setLocalStorageToken(null)
  }, [])
  const login = useCallback((token: string) => {
    setToken(token);
    setLocalStorageToken(token);
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
