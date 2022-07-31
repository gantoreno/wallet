import { User } from "@prisma/client"
import type { GetServerSideProps } from "next"
import { useRouter } from "next/router"

import { LoginCard, PageLoader } from "../components/composite"
import { Container } from "../components/layout"
import { useAuth } from "../hooks"
import prisma from "../prisma"

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany()

  return {
    props: {
      users,
    },
  }
}

type LoginProps = {
  users: User[]
}

const Login = ({ users }: LoginProps) => {
  const router = useRouter()

  const { isLoading, user: currentUser, login } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  if (currentUser) {
    router.push("/")
  }

  return (
    <Container>
      <div className="min-h-screen flex mx-auto items-center max-w-sm">
        <LoginCard users={users} onSubmit={login} />
      </div>
    </Container>
  )
}

export default Login
