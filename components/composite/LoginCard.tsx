import { User } from "@prisma/client"
import Image from "next/image"
import { useState } from "react"

import { Button, Card } from "../ui"

import wealthy from "../../assets/svg/wealthy.svg"

import metadata from "../../package.json"

type LoginCardProps = {
  users: User[]
  onSubmit: (userId: string, remember?: boolean) => void
}

const LoginCard = ({ users, onSubmit }: LoginCardProps) => {
  const [selectedUserId, setSelectedUserId] = useState("")
  const [shouldRemember, setShouldRemember] = useState(false)

  return (
    <Card>
      <div className="mb-10 text-center">
        <Image src={wealthy} alt="Wealthy" />
      </div>
      <Card.Title>Login</Card.Title>
      <Card.Body>
        <div className="mb-5 text-center text-xs font-light uppercase text-neutral-400">
          Select a user from the{" "}
          <span className="font-bold text-teal-400">dropdown</span> list
        </div>
        <select
          className="mb-5 w-full rounded-md border border-gray-200 font-light text-neutral-600"
          onChange={(evt) => setSelectedUserId(evt.target.value)}
          value={selectedUserId}
        >
          <option value="">-</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.firstName} {user.lastName}
            </option>
          ))}
        </select>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={shouldRemember}
            onChange={() => setShouldRemember(!shouldRemember)}
            className="mr-5 h-5 w-5 cursor-pointer rounded-md border border-gray-200 text-teal-400"
          />
          <label className="text-xs font-light uppercase text-neutral-400">
            Remember me?
          </label>
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="w-full text-center">
          <Button
            title="Login"
            color="teal"
            onClick={() => onSubmit(selectedUserId, shouldRemember)}
            disabled={!selectedUserId}
          />
        </div>
        <div className="mt-10">
          <small className="text-xs font-light uppercase text-neutral-400">
            {metadata.name} v{metadata.version}
          </small>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default LoginCard
