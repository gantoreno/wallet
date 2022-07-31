import { User } from "@prisma/client"

export const fetchUserById = async (userId: string): Promise<User | null> => {
  const response = await fetch(`/api/user/${userId}`)
  const user: User = await response.json()

  return user ?? null
}
