import React from "react"
import { graphql } from "gatsby"
import { Typography } from "@material-ui/core"

const BlogPost = ({ data }) => {
  const { wordpressPost } = data
  return <>
    <Typography variant="h1">{wordpressPost.title}</Typography>
  </>
}

export default BlogPost

export const pageQuery = graphql`
  query WordpressPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
    }
  }
`
