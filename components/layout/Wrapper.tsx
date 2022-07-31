import { NavBar } from "../composite"

export type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: 102 }}>{children}</div>
    </>
  )
}

export default Wrapper
