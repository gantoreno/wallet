import { useRouter } from "next/router"

import { Overview, PageLoader } from "../components/composite"
import { Container, Section, Wrapper } from "../components/layout"
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
        <Section>
          <Section.Title>
            Your <span className="text-teal-400">Overview</span>
          </Section.Title>
          <Overview />
        </Section>
      </Container>
    </Wrapper>
  )
}

export default Home
