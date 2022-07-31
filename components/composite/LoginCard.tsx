import { User } from "@prisma/client"
import Image from "next/image"
import { useState } from "react"

import { Button, Card } from "../ui"

import wallet from "../../assets/svg/wallet.svg"

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
        <Image src={wallet} alt="Wallet" />
      </div>
      <Card.Title>Login</Card.Title>
      <Card.Body>
        <div className="mb-5 text-center text-xs font-light uppercase text-neutral-400">
          Select a user from the{" "}
          <span className="font-bold text-teal-400">dropdown</span> list
        </div>
        <select
          className="mb-5 w-full rounded-md border border-gray-200 text-neutral-700"
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
            className="mr-5 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-200 checked:bg-teal-400"
          />
          <label className="text-xs font-light uppercase text-neutral-400">
            Remember me?
          </label>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button
          title="Login"
          color="teal"
          onClick={() => onSubmit(selectedUserId, shouldRemember)}
          disabled={!selectedUserId}
        />
      </Card.Footer>
    </Card>
  )
}

export default LoginCard
