import React from "react"
import Layout from "../components/Layout"
import PageContextProvider from "../context/PageContext"

const HowToHelp = props => {
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>How to Help</h1>
      </Layout>
    </PageContextProvider>
  )
}

export default HowToHelp
