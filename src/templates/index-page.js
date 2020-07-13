import React from 'react'

import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import CategoryBar from '../components/CategoryBar'
import FeatureImage from '../components/FeatureImage'
import { Typography, Grid, Container } from '@material-ui/core'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  categories
}) => (
    <>
      <FeatureImage image={image}>
        <Typography variant="h1">Relay Resource</Typography>
      </FeatureImage>
      <CategoryBar categories={categories} />
      <Container fixed>
        <BlogRoll />
      </Container>
    </>
  )


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <IndexPageTemplate
      image={data.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
      categories={data.wordpress.categories}
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
    wordpress {
      categories {
        edges {
          node {
            name
            id
            uri
          }
        }
      }
    }
  }
`
