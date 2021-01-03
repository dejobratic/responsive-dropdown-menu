import React, { useContext } from "react"

import NavBar from "app/header/NavBar"
import Link from "app/components/link/Link"

import AppContext from "app/context/AppContext"
import { toggleMenuVisibility } from "app/context/app.actions"

import "app/header/header.css"

const Header = () => {
  const {
    state: { menuVisible, user },
    dispatch,
  } = useContext(AppContext)

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        {user.firstName}
      </Link>

      <div
        className="header__toggle"
        onClick={() => dispatch(toggleMenuVisibility())}
      >
        <i className={`bx ${menuVisible ? "bx-x" : "bx-menu"}`}></i>
      </div>

      <NavBar />
    </header>
  )
}

export default Header
