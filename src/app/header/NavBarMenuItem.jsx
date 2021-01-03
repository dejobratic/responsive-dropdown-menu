import React, { useContext } from "react"
import { Link } from "react-scroll"

import AppContext from "app/context/AppContext"
import { toggleMenuVisibility } from "app/context/app.actions"

const NavBarMenuItem = ({ title, to }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <li className="nav__menu-item">
      <Link
        to={to}
        className="nav__menu-item-link"
        hashSpy
        spy
        onClick={() => dispatch(toggleMenuVisibility())}
      >
        {title}
      </Link>
    </li>
  )
}

export default NavBarMenuItem
