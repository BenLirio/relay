import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"
import { withPrefix } from "gatsby"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
