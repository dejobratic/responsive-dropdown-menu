import React, { useContext } from "react"

import Link from "app/components/link/Link"

import AppContext from "app/context/AppContext"
import { toggleMenuVisibility } from "app/context/app.actions"

const NavBarMenuItemLink = ({ to, children }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <Link
      to={to}
      className="nav__menu-item-link"
      onClick={() => dispatch(toggleMenuVisibility())}
    >
      {children}
    </Link>
  )
}

export default NavBarMenuItemLink
