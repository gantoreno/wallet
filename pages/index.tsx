import { useRouter } from "next/router"

import {
  History,
  Loan,
  Overview,
  PageLoader,
  Report,
} from "../components/composite"
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
        <Section>
          <Section.Title>
            Monthly <span className="text-teal-400">Report</span>
          </Section.Title>
          <Report />
        </Section>
        <Section>
          <Section.Title>
            Pending <span className="text-teal-400">Loans</span>
          </Section.Title>
          <Loan />
        </Section>
        <Section>
          <Section.Title>
            Payment <span className="text-teal-400">History</span>
          </Section.Title>
          <History />
        </Section>
      </Container>
    </Wrapper>
  )
}

export default Home
