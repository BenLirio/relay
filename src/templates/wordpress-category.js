import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Container } from '@material-ui/core'
import Posts from '../components/Posts'

const CategoryPage = ({ data }) => {
  const { wpCategory } = data
  return (
    <>
      <Container fixed>
        <Typography variant="h1">{wpCategory.name}</Typography>
        <Posts nodes={wpCategory.posts.nodes} />
      </Container>
    </>
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query WordpressCategoryByID($id: String!) {
    wpCategory(id: { eq: $id }) {
      name
      posts {
        nodes {
          title
          id
          uri
          excerpt
          featuredImage {
            node {
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
  }
`
