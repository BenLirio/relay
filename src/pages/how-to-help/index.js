import React from 'react'
import { Typography, Container, Grid } from '@material-ui/core'

const HowToHelp = () => {
  return (
    <>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">How to Help</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">How to Donate</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">How to Volunteer</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">How to Advocate</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default HowToHelp
export const howToHelpQuery = graphql`
  query howToHelpQuery {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

