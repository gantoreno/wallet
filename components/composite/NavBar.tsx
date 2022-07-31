import Image from "next/image"
import { useAuth } from "../../hooks"
import { Container } from "../layout"
import { Avatar } from "../ui"

import wealthy from "../../assets/svg/wealthy.svg"

type NavBarProps = {}

const NavBar = ({}: NavBarProps) => {
  const { user, logout } = useAuth()

  return (
    <nav className="w-100 fixed top-0 left-0 w-screen overflow-hidden border-b border-b-gray-200 py-5">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white/50 backdrop-blur-md"></div>
      <Container>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-start">
            <Image src={wealthy} alt="Wealthy" />
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-5 text-right leading-[0px]">
              <h4 className="text-xs font-light uppercase text-neutral-700">
                Welcome,{" "}
                <span className="font-bold text-teal-400">
                  {user?.firstName}
                </span>
              </h4>
              <button
                className="p-0 text-xs font-light uppercase text-neutral-400 hover:text-neutral-700"
                onClick={logout}
              >
                Logout
              </button>
            </div>
            <Avatar
              firstName={user?.firstName ?? ""}
              lastName={user?.lastName ?? ""}
            />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
