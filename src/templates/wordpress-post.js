import React from "react"
import { Link, graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import SEO from "../components/SEO"
import BackBar from "../components/BackBar"
import Img from "gatsby-image"
import Footer from "../components/Footer"

const tagMap = new Map()
tagMap.set("body", "div")
tagMap.set("h1", "Typography")
tagMap.set("h2", "Typography")
tagMap.set("h3", "Typography")
tagMap.set("h4", "Typography")
tagMap.set("h5", "Typography")
const getTagName = tag => {
  const tagLower = tag.toLowerCase()
  return tagMap.get(tagLower) || tagLower
}

const BlogPost = ({ data }) => {
  const { wpPost } = data
  return (
    <>
      <SEO></SEO>
      <Container maxWidth="sm">
        <Link to="/">Home Page</Link>
        <Typography variant="h2">{wpPost.title}</Typography>
        {/* <Typography variant="h5">By: {wpPost.author.node.name}</Typography>  */}
        {/* The above code works only for the Index page blogs. No idea why. */}
        <div dangerouslySetInnerHTML={{ __html: wpPost.content }}></div>
      </Container>
      <Footer></Footer>
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
