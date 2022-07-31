import Image from "next/image"
import { useAuth } from "../../hooks"
import { Container } from "../layout"
import { Avatar } from "../ui"

import wallet from "../../assets/svg/wallet.svg"

type NavBarProps = {}

const NavBar = ({}: NavBarProps) => {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 w-screen w-100 py-5 border-b border-b-gray-200 overflow-hidden">
      <div className="bg-white/50 backdrop-blur-md w-full h-full absolute top-0 left-0 -z-10"></div>
      <Container>
        <div className="grid grid-cols-2">
          <div className="flex justify-start items-center">
            <Image src={wallet} alt="Wallet" />
          </div>
          <div className="flex justify-end items-center">
            <div className="mr-5 text-right leading-[0px]">
              <h4 className="text-sm font-medium">
                Welcome,{" "}
                <span className="font-bold text-teal-400">
                  {user?.firstName}
                </span>
              </h4>
              <button
                className="text-xs font-light uppercase text-neutral-400 p-0 hover:text-neutral-700"
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
