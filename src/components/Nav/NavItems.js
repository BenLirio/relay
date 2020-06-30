import React from "react"
import classes from "./NavItems.module.css"

const NavItems = ({ children }) => {
  return <ul className={classes.root}>{children}</ul>
}

export default NavItems
