import React from "react"
import classes from "./NavDropDown.module.css"
import linkClasses from "./NavItem.module.css"
import { Link } from "gatsby"

const NavDropDown = ({ children, title, to, selected }) => {
  return (
    <>
      <li className={[classes.dropDownNavItem, linkClasses.li].join(" ")}>
        <Link
          to={to}
          className={[
            linkClasses.link,
            selected ? linkClasses.selected : null,
          ].join(" ")}
        >
          {title}
        </Link>
        <ul className={classes.dropDown}>{children}</ul>
      </li>
    </>
  )
}

export default NavDropDown
