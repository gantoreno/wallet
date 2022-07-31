import { useRouter } from "next/router"

import { PageLoader } from "../components/composite"
import { Container, Wrapper } from "../components/layout"
import { useAuth } from "../hooks"

type HomeProps = {}

const Home = ({}: HomeProps) => {
  const router = useRouter()
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return <PageLoader />
  }

  if (!user) {
    router.push("/login")

    return null
  }

  return (
    <Wrapper>
      <Container>
        <div className="text-center font-light text-neutral-400">
          Nothing to see here... Yet {"😏"}
        </div>
      </Container>
    </Wrapper>
  )
}

export default Home
