import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'

const BlogPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <Typography variant="h1">{wpPost.title}</Typography>
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
