import React from "react"
import { Link as ScrollLink } from "react-scroll"

const Link = ({ to, children, ...otherProps }) => {
  return (
    <ScrollLink to={to} hashSpy spy {...otherProps}>
      {children}
    </ScrollLink>
  )
}

export default Link
