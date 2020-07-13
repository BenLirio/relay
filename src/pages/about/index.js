import React from 'react'
import People from '../../components/People'
import { Typography, Grid, Container } from '@material-ui/core'
import FeatureImage from '../../components/FeatureImage'


export const AboutPage = ({ data }) => {

  console.log('data', data)
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1">About</Typography>
      </FeatureImage>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <People />
          </Grid>
        </Grid>
      </Container>
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

