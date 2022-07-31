import type { User } from "@prisma/client"
import type { Dispatch, ReactNode } from "react"
import { createContext, useEffect, useReducer } from "react"

import { fetchUserById } from "../functions/user"

export type Auth = {
  isLoading: boolean
  user: User | null
}

type Login = {
  action: "login"
  payload: User
}

type Logout = {
  action: "logout"
}

type Settle = {
  action: "settle"
}

type Update = Login | Logout | Settle

const authInitialState = {
  isLoading: true,
  user: null,
}
const dispatchAuthInitialState = () => null

export const AuthContext = createContext<Auth>(authInitialState)
export const DispatchAuthContext = createContext<Dispatch<Update>>(
  dispatchAuthInitialState
)

const reducer = (state: Auth, update: Update): Auth => {
  switch (update.action) {
    case "login":
      localStorage.setItem("user", update.payload.id)
      return {
        ...state,
        user: update.payload,
        isLoading: false,
      }
    case "logout":
      localStorage.removeItem("user")
      return {
        ...state,
        user: null,
        isLoading: false,
      }
    default:
      return state
  }
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, authInitialState)

  const getStoredUser = async () => {
    const storedUserId = localStorage.getItem("user")

    if (!storedUserId) {
      dispatch({ action: "logout" })

      return
    }

    const user = await fetchUserById(storedUserId)

    if (!user) {
      dispatch({ action: "logout" })

      return
    }

    dispatch({
      action: "login",
      payload: user,
    })
  }

  useEffect(() => {
    getStoredUser()
  }, [])

  return (
    <DispatchAuthContext.Provider value={dispatch}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </DispatchAuthContext.Provider>
  )
}

export default AuthProvider
