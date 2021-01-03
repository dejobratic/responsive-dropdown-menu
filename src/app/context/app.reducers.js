import { INITIAL_STATE } from "app/context/app.utils"
import { appAction } from "app/context/app.actions"

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appAction.TOGGLE_MENU_VISIBILITY:
      return { ...state, menuVisible: !state.menuVisible }

    default:
      return state
  }
}

export default appReducer
