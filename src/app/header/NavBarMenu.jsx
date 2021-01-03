import React from "react"

import NavBarMenuItem from "app/header/NavBarMenuItem"
import NavBarMenuDropdown from "app/header/NavBarMenuDropdown"
import NavBarMenuDropdownItem from "app/header/NavBarMenuDropdownItem"

const NavBarMenu = () => {
  return (
    <div className="nav__menu">
      <ul className="nav__menu-item-list">
        <NavBarMenuItem to="home" title="Home" />
        <NavBarMenuDropdown title="About">
          <NavBarMenuDropdownItem to="about" title="About me" />
          <NavBarMenuDropdownItem to="education" title="Education" />
          <NavBarMenuDropdownItem to="experience" title="Work Experience" />
        </NavBarMenuDropdown>
        <NavBarMenuItem to="skills" title="Skills" />
        <NavBarMenuItem to="projects" title="Projects" />
        <NavBarMenuItem to="contact" title="Contact" />
      </ul>
    </div>
  )
}

export default NavBarMenu
