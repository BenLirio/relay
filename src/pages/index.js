import React from 'react'
import FeatureImage from '../components/FeatureImage'
import BlogRoll from '../components/BlogRoll'
import CategoryBar from '../components/CategoryBar'
import { Container, Grid, Typography } from '@material-ui/core'

const Relay = ({ data }) => {
  return (
    <div>
      <FeatureImage image={data.image} />
      <CategoryBar />
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">{'Top Stories'}</Typography>
          </Grid>
        </Grid>
        <BlogRoll width={4} height={1} excerpt={false} />
        <Typography variant="h2">Covid Map</Typography>
        <Typography variant="h2">How To Help</Typography>
      </Container>
    </div>
  )
}

export default Relay
export const pageQuery = graphql`
  query RelayQuery {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`