import React from "react"
import Layout from "../components/Layout"

const post = ({ pathContext }) => {
  const { title, content } = pathContext
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </Layout>
  )
}

export default post
