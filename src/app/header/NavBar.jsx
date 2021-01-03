import React, { useContext } from "react"

import UserInfo from "app/header/UserInfo"
import NavBarMenu from "app/header/NavBarMenu"

import AppContext from "app/context/AppContext"

const NavBar = () => {
  const {
    state: { menuVisible, user },
  } = useContext(AppContext)

  return (
    <nav className={`nav ${menuVisible && "show"}`}>
      <div className="nav__content bd-grid">
        <UserInfo user={user} />

        <NavBarMenu />
      </div>
    </nav>
  )
}

export default NavBar
