import React from 'react'
import People from '../../components/People'
import { Typography } from '@material-ui/core'
import FeatureImage from '../../components/FeatureImage'


export const AboutPage = ({ data }) => {

  console.log('data', data)
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography>About</Typography>
      </FeatureImage>
      <People />
    </>
  )
}


export default AboutPage


export const pageQuery = graphql`
  query AboutPage {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

