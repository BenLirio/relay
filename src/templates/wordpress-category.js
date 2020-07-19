import React from "react"
import { graphql } from "gatsby"
import { Typography, Container } from "@material-ui/core"
import Posts from "../components/Posts"

const CategoryPage = ({ data }) => {
  const { wordpressCategory } = data
  const { allWordpressPost } = data
  return (
    <>
      <Container fixed>
        <Typography variant="h1">{wordpressCategory.name}</Typography>
        <Posts allWordpressPost={allWordpressPost} />
      </Container>
    </>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query WordpressCategoryByID($id: String!, $wordpress_id: Int!) {
    wordpressCategory(id: { eq: $id }) {
      name
    }
    allWordpressPost(
      filter: {
        categories: { elemMatch: { wordpress_id: { eq: $wordpress_id } } }
      }
    ) {
      edges {
        node {
          title
          id
          path
          excerpt
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
