import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/axios";

interface User {
  id: string
  email: string
  name: string
  driver_license: string
  avatar: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}


interface AuthContextProps {
  user: User
  signIn: ({ email, password }: SignInCredentials) => Promise<void>
}

interface AuthContextProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState)

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password
    })
    const { user, token } = response.data

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ user, token })
  }



  return (
    <AuthContext.Provider value={
      {
        user: data.user,
        signIn
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
