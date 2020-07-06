import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import classes from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
