import React from "react"
import Layout from "../../components/Layout"
import PageContextProvider from "../../context/PageContext"

const OurMission = props => {
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>Our mission</h1>
      </Layout>
    </PageContextProvider>
  )
}

export default OurMission
