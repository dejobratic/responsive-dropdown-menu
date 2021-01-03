import React from "react"

import NavBarMenuItem from "app/header/NavBarMenuItem"

const NavBarMenu = () => {
  return (
    <div className="nav__menu">
      <ul className="nav__menu-item-list">
        <NavBarMenuItem to="home" title="Home" />
        <NavBarMenuItem to="about" title="About" />
        <NavBarMenuItem to="skills" title="Skills" />
        <NavBarMenuItem to="projects" title="Projects" />
        <NavBarMenuItem to="contact" title="Contact" />
      </ul>
    </div>
  )
}

export default NavBarMenu
