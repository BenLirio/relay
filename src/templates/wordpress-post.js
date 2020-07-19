import React, { Children } from "react"
import { graphql } from "gatsby"
import { Typography, Grid, Link, Box } from "@material-ui/core"
const renderElement = (element) => {
  let CustomElement = () => <p>{element.data}</p>
  switch (element.tag) {
    case 'p': {
      CustomElement = () => {
        return <p>{element.data}</p>
      }
      break;
    }
  }
  return <CustomElement>
    {element.children ? element.children.map(child => renderElement(child)) : null}
  </CustomElement>
}



const displayElement = (element) => {
  const children = element.children ? element.children.map(displayElement) : null
  console.count(element.tag)
  switch (element.tag) {
    case 'root':
      return <>{children}</>
    case 'p':
      return <Typography variant='body1'>{element.data}{children}</Typography>
    case 'a':
      return <Link>{element.data}{children}</Link>
    case 'em':
      return <span style={{ fontWeight: 600 }}>{element.data}{children}</span>
    case 'img':
      return <div style={{ height: 200, width: 200, backgroundColor: 'black' }}>{children}</div>
    case 'strong':
      return <span style={{ fontWeight: 600 }}>{element.data}{children}</span>
    case 'h4':
      return <Typography variant="h4">{element.data}{children}</Typography>
    case 'h5':
      return <Typography variant="h5">{element.data}{children}</Typography>
  }
}

const BlogPost = ({ data }) => {
  const { wordpressPost } = data
  const { foo } = wordpressPost
  const postData = JSON.parse(foo)
  const elements = displayElement(postData)
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
