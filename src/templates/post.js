import React from "react"
import Layout from "../components/Layout"
import PageContextProvider from "../context/PageContext"

const post = props => {
  const { title, content } = props.pathContext
  return (
    <PageContextProvider {...props}>
      <Layout>
        <h1>{title}</h1>
        <section>{content}</section>
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      </Layout>
    </PageContextProvider>
  )
}

export default post
