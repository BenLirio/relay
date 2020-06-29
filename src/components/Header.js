import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
        <ul>
          <li>
            <Link to="/about-us/our-mission">Our Mission</Link>
          </li>
          <li>
            <Link to="/about-us/our-team">Our Team</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/tips-and-advice">Tips and Advice</Link>
      </li>
      <li>
        <Link to="/how-to-help">How to help</Link>
      </li>
    </ul>
  )
}

export default Header
