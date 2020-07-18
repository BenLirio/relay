import React from "react"
import { graphql } from "gatsby"
import { Typography, Grid } from "@material-ui/core"
const renderElement = (element) => {
  return <div>
    <p>{element.data}</p>
    {element.children ? element.children.map(child => renderElement(child)) : null}
  </div>
}
const BlogPost = ({ data }) => {
  const { wordpressPost } = data
  const { foo } = wordpressPost
  const postData = JSON.parse(foo)
  const elements = renderElement(postData)
  return (
    <>
      <Typography variant="h1">{wordpressPost.title}</Typography>
      <Grid container>
        {elements}
      </Grid>
    </>)
}

export default BlogPost

export const pageQuery = graphql`
  query WordpressPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      excerpt
      content
      foo
    }
  }
`
