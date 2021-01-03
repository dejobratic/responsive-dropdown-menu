import React from "react"

const NavBarMenuDropdown = ({ title, children }) => {
  return (
    <li className="nav__menu-item nav__dropdown">
      <a href="/#" className="nav__menu-item-link nav__dropdown-link">
        {title} <i className="bx bx-chevron-down nav__dropdown-icon"></i>
      </a>
      <ul className="nav__dropdown-menu">{children}</ul>
    </li>
  )
}

export default NavBarMenuDropdown
