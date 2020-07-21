import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Container } from '@material-ui/core'

const BlogPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2">{wpPost.title}</Typography>
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
    }
  }
`
