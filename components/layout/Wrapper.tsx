import { NavBar } from "../composite"

export type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: 82, paddingBottom: 40, minHeight: "100vh" }}>
        {children}
      </div>
    </>
  )
}

export default Wrapper
