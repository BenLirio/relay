import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import SEO from "../components/SEO"
import BackBar from "../components/BackBar"
import Img from "gatsby-image"

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
  const children = []
  const [content, setContent] = useState(null)
  const renderNodes = node => {
    const children = []
    node.childNodes.forEach(child => {
      children.push(renderNodes(child))
    })
    if (node.nodeType === 3) {
      return node.textContent
    }
    // console.log('node.tagName', node.tagName)
    const key = Math.random()
    switch (node.tagName) {
      case "P": {
        return (
          <Typography variant="body1" key={key}>
            {children}
          </Typography>
        )
      }
      case "H1": {
        return (
          <Typography variant="h1" key={key}>
            {children}
          </Typography>
        )
      }
      case "H2": {
        return (
          <Typography variant="h4" key={key}>
            {children}
          </Typography>
        )
      }
      case "H3": {
        return (
          <Typography variant="h4" key={key}>
            {children}
          </Typography>
        )
      }
      case "H4": {
        return (
          <Typography variant="h5" key={key}>
            {children}
          </Typography>
        )
      }
      case "H5": {
        return (
          <Typography variant="h6" key={key}>
            {children}
          </Typography>
        )
      }
      case "A": {
        if (node.attributes.href.value.includes("http")) {
          return (
            <a key={key} href={node.attributes.href.value}>
              {children}
            </a>
          )
        }
        return (
          <Link to={node.attributes.href.value} key={key}>
            {children}
          </Link>
        )
      }
      case "OL": {
        return <ol key={key}>{children}</ol>
      }
      case "UL": {
        return <ul key={key}>{children}</ul>
      }
      case "LI": {
        return <li key={key}>{children}</li>
      }
      default: {
        console.warn("NODE TAG: ", node.tagName)
        return <div key={key}>{children}</div>
      }
    }
    // return React.createElement(getTagName(node.tagName), { key: Math.random() }, [...children])
  }
  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(wpPost.content, "text/html")
    setContent(renderNodes(doc.body))
  }, [])
  return (
    <>
      <SEO></SEO>
      <BackBar />
      <Container maxWidth="sm">
        <Img
          fluid={wpPost.featuredImage.node.localFile.childImageSharp.fluid}
        />
        <Typography variant="h2">{wpPost.title}</Typography>
        {content}
        {/* <Typography variant="h5">By: {wpPost.author.node.name}</Typography>  */}
        {/* The above code works only for the Index page blogs. No idea why. */}
        {/* <div dangerouslySetInnerHTML={{ __html: wpPost.content }}></div> */}
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
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid {
                aspectRatio
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
