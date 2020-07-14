import React from "react"
import { graphql } from "gatsby"
import CategoryPosts from "../components/CategoryPosts"
import { Typography } from "@material-ui/core"

const CategoryPage = ({ data }) => {
  const { wordpressCategory } = data
  const { allWordpressPost } = data
  return (
    <>
      <Typography variant="h1">{wordpressCategory.name}</Typography>
      <CategoryPosts allWordpressPost={allWordpressPost} />
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
        }
      }
    }
  }
`
