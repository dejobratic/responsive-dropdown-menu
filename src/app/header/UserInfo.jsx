import React from "react"
import { Link } from "react-scroll"

const UserInfo = ({ user }) => {
  return (
    <Link to="home" className="nav__user" hashSpy spy>
      <div className="nav__user-img">
        <img src={user.imageUrl} alt="" />
      </div>

      <div>
        <span className="nav__user-name">{user.firstName}</span>
        <span className="nav__user-name">{user.lastName}</span>
      </div>
    </Link>
  )
}

export default UserInfo
