import React from "react"

import { graphql } from "gatsby"
import BlogRoll from "../components/BlogRoll"
import CategoryBar from "../components/CategoryBar"
import FeatureImage from "../components/FeatureImage"
import { Typography, Grid, Container } from "@material-ui/core"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  allWordpressCategory,
}) => (
  <>
    <FeatureImage image={image}>
      <Typography variant="h1">Relay Resource</Typography>
    </FeatureImage>
    <CategoryBar allWordpressCategory={allWordpressCategory} />
    <Container fixed>
      <BlogRoll />
    </Container>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { allWordpressCategory } = data
  return (
    <IndexPageTemplate
      image={data.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
      allWordpressCategory={allWordpressCategory}
    />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
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
    allWordpressCategory {
      edges {
        node {
          name
          id
          path
        }
      }
    }
  }
`
