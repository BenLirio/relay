import React from "react"
import { Button, Typography } from "@material-ui/core"
import BlogRoll from "../../components/BlogRoll"
import CategoryBar from "../../components/CategoryBar"
import FeatureImage from "../../components/FeatureImage"

const Index = ({ data }) => {
  const { allWordpressCategory } = data
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1" color="primary">
          Feature Image
        </Typography>
      </FeatureImage>
      <CategoryBar />
      <BlogRoll />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query PostPageTemplate {
    allWordpressCategory {
      edges {
        node {
          name
          id
          path
        }
      }
    }
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
