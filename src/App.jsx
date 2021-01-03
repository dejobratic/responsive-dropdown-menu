import React from "react"

import { AppContextProvider } from "app/context/AppContext"

import Header from "app/header/Header"

const App = () => {
  return (
    <AppContextProvider>
      <Header />
    </AppContextProvider>
  )
}

export default App
