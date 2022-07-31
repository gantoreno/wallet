import { User } from "@prisma/client"
import { useState } from "react"

import { Card } from "../ui"

type LoginCardProps = {
  users: User[]
  onSubmit: (userId: string) => void
}

const LoginCard = ({ users, onSubmit }: LoginCardProps) => {
  const [selectedUserId, setSelectedUserId] = useState("")

  return (
    <Card>
      <Card.Title>Login</Card.Title>
      <Card.Body>
        <select
          className="border border-gray-200 rounded-md w-full"
          onChange={(evt) => setSelectedUserId(evt.target.value)}
          value={selectedUserId}
        >
          <option value="">-</option>
          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
              selected={user.id === selectedUserId}
            >
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
      </Card.Body>
      <Card.Footer>
        <button
          onClick={() => !!selectedUserId && onSubmit(selectedUserId)}
          disabled={!selectedUserId}
        >
          Login
        </button>
      </Card.Footer>
    </Card>
  )
}

export default LoginCard
