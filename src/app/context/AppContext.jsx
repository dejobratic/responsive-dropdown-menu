import React, { createContext, useReducer } from "react"

import { INITIAL_STATE } from "app/context/app.utils"
import appReducer from "app/context/app.reducers"

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
