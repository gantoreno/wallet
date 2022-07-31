import type { User } from "@prisma/client"
import type { Dispatch, ReactNode } from "react"
import { createContext, useEffect, useReducer } from "react"

import { fetchUserById } from "../functions/user"

export type Auth = {
  isLoading: boolean
  user: User | null
}

type Load = {
  action: "load"
  payload: boolean
}

type Login = {
  action: "login"
  payload: {
    user: User
    remember: boolean
  }
}

type Logout = {
  action: "logout"
}

type Update = Load | Login | Logout

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
    case "load":
      return {
        ...state,
        isLoading: update.payload,
      }
    case "login":
      if (update.payload.remember) {
        localStorage.setItem("user", update.payload.user.id)
      } else {
        sessionStorage.setItem("user", update.payload.user.id)
      }

      return {
        ...state,
        user: update.payload.user,
        isLoading: false,
      }
    case "logout":
      localStorage.removeItem("user")
      sessionStorage.removeItem("user")

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
    dispatch({ action: "load", payload: true })

    const storedUserId =
      sessionStorage.getItem("user") ?? localStorage.getItem("user")
    const remember = !!localStorage.getItem("user")

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
      payload: {
        user,
        remember,
      },
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
