import { NavBar } from "../composite"

export type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: 82 }}>
        <div style={{ marginTop: 20 }}>{children}</div>
      </div>
    </>
  )
}

export default Wrapper
