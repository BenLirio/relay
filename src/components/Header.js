import React from "react"
import { Link } from "gatsby"
import NavBar from "./Nav/NavBar"
import NavItem from "./Nav/NavItem"
import NavItems from "./Nav/NavItems"

import useLocation from "../hooks/useLocation"
import NavDropDown from "./Nav/NavDropDown"

const Header = () => {
  const { pathname } = useLocation()
  return (
    <>
      <NavBar>
        <NavItems>
          <NavItem selected={pathname === "/"} to={"/"} title={"Home"} />
          <NavDropDown
            selected={pathname.startsWith("/about-us")}
            to={"/about-us"}
            title={"About Us"}
          >
            <NavItem
              selected={pathname.startsWith("/about-us/our-mission")}
              to={"/about-us/our-mission"}
              title={"Our Mission"}
            />
            <NavItem
              selected={pathname.startsWith("/about-us/our-team")}
              to={"/about-us/our-team"}
              title={"Our Team"}
            />
          </NavDropDown>
          <NavItem
            selected={pathname.startsWith("/tips-and-advice")}
            to={"/tips-and-advice"}
            title={"Tips and Advice"}
          />
          <NavItem
            selected={pathname.startsWith("/how-to-help")}
            to={"/how-to-help"}
            title={"How to Help"}
          />
        </NavItems>
      </NavBar>
    </>
  )
}

export default Header
