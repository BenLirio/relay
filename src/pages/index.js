import React from "react"
import Layout from "../components/Layout"
import PageContextProvider from "../context/PageContext"

const index = props => {
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </PageContextProvider>
  )
}

export default index
