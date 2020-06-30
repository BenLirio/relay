import React from "react"
import classes from "./NavBar.module.css"

const NavBar = ({ children }) => {
  return <div className={classes.root}>{children}</div>
}

export default NavBar
