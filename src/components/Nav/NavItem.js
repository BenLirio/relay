import React from "react"
import classes from "./NavItem.module.css"
import { Link } from "gatsby"

const NavItem = ({ title, to, selected }) => {
  return (
    <li className={classes.li}>
      <Link
        to={to}
        className={[classes.link, selected ? classes.selected : null].join(" ")}
      >
        {title}
      </Link>
    </li>
  )
}

export default NavItem
