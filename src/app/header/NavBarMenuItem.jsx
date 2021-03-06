import React from "react"

import NavBarMenuItemLink from "app/header/NavBarMenuItemLink"

const NavBarMenuItem = ({ title, to }) => {
  return (
    <li className="nav__menu-item">
      <NavBarMenuItemLink to={to}>{title}</NavBarMenuItemLink>
    </li>
  )
}

export default NavBarMenuItem
