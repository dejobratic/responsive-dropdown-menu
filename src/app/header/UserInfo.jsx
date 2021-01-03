import React, { useContext } from "react"

import Link from "app/components/link/Link"

import AppContext from "app/context/AppContext"
import { toggleMenuVisibility } from "app/context/app.actions"

const UserInfo = ({ user }) => {
  const { dispatch } = useContext(AppContext)

  return (
    <Link to="home" className="nav__user">
      <div className="nav__user-img">
        <img
          src={user.imageUrl}
          alt=""
          onClick={() => dispatch(toggleMenuVisibility())}
        />
      </div>

      <div onClick={() => dispatch(toggleMenuVisibility())}>
        <span className="nav__user-name">{user.firstName}</span>
        <span className="nav__user-name">{user.lastName}</span>
      </div>
    </Link>
  )
}

export default UserInfo
