import React from "react"
import { Link, graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import SEO from "../components/SEO"
import BackBar from "../components/BackBar"

const BlogPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <SEO></SEO>
      <Container maxWidth="sm">
        <BackBar></BackBar>
        <Typography variant="h2">{wpPost.title}</Typography>
        {/* <Typography variant="h5">By: {wpPost.author.node.name}</Typography>  */}
        {/* The above code works only for the Index page blogs. No idea why. */}
        <div dangerouslySetInnerHTML={{ __html: wpPost.content }}></div>
      </Container>
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query WordpressPostByID($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      author {
        node {
          name
        }
      }
    }
  }
`
