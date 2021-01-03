import React from "react"

import NavBarMenuItemLink from "app/header/NavBarMenuItemLink"

const NavBarMenuDropdownItem = ({ title, to }) => {
  return (
    <li className="nav__dropdown-menu-item">
      <NavBarMenuItemLink to={to}>{title}</NavBarMenuItemLink>
    </li>
  )
}

export default NavBarMenuDropdownItem
