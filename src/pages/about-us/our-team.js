import React from "react"
import Layout from "../../components/Layout"
import PageContextProvider from "../../context/PageContext"

const OurTeam = props => {
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>Our Team</h1>
      </Layout>
    </PageContextProvider>
  )
}

export default OurTeam
