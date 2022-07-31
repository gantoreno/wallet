import { useContext } from "react"

import type { Auth } from "../context/AuthProvider"
import { AuthContext, DispatchAuthContext } from "../context/AuthProvider"
import { fetchUserById } from "../functions/user"

type AuthActions = {
  login: (userId: string) => Promise<void>
  logout: () => Promise<void>
}

const useAuth = (): Auth & AuthActions => {
  const auth = useContext(AuthContext)
  const authDispatch = useContext(DispatchAuthContext)

  const login = async (userId: string) => {
    const user = await fetchUserById(userId)

    if (!user) {
      return
    }

    authDispatch({
      action: "login",
      payload: user,
    })
  }

  const logout = async () => {
    authDispatch({
      action: "logout",
    })
  }

  return {
    ...auth,
    login,
    logout,
  }
}

export default useAuth
