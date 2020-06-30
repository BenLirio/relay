import React from "react"

export const PageContext = React.createContext({ a: "b" })

const PageContextProvider = ({ children, ...rest }) => {
  return <PageContext.Provider value={rest}>{children}</PageContext.Provider>
}

export default PageContextProvider
