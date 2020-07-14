import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./all.sass"

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
