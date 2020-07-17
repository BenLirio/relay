import React from 'react'
import { Typography, Container, Grid } from '@material-ui/core'
import FeatureImage from '../../components/FeatureImage'
import Img from 'gatsby-image'


const HowToHelp = ({ data }) => {
  console.log('data', data)

  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1" color="primary">How To Help</Typography>
      </FeatureImage>

      <Container fixed>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h2">How to Donate</Typography>
          </Grid>
          <Grid item xs={6}>
            <Img fluid={data.image.childImageSharp.fluid}></Img>
          </Grid>
          <Grid item xs={6}>
            <Img fluid={data.image.childImageSharp.fluid}></Img>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2">How to Volunteer</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2">How to Advocate</Typography>
          </Grid>
          <Grid item xs={6}>
            <Img fluid={data.image.childImageSharp.fluid}></Img>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default HowToHelp
export const howToHelpQuery = graphql`
  query howToHelpQuery {
   image: file(relativePath: { eq: "feature-tips.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

