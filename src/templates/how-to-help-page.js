import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import FeatureImage from '../components/FeatureImage'
import { Typography, Container } from '@material-ui/core'

export const HowToHelpPageTemplate = ({
  image,

}) => (
    <>
      <FeatureImage image={image}>
        <Typography variant="h1">How to Help</Typography>
      </FeatureImage>
      <Container fixed>
        <Typography variant="h1">Test</Typography>
      </Container>
    </>
  )

const HowToHelpPage = ({ data }) => {

  return (
    <HowToHelpPageTemplate
      image={data.image}

    />
  )
}

HowToHelpPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HowToHelpPage

export const howToHelpQuery = graphql`
  query howToHelpQuery {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
