import React from "react"
import Layout from "../components/Layout"
import { useState } from "react"
import PageContextProvider from "../context/PageContext"

const AboutUs = props => {
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>About us</h1>
      </Layout>
    </PageContextProvider>
  )
}

export default AboutUs
