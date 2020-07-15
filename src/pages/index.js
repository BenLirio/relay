import React from "react"
import FeatureImage from "../components/FeatureImage"
import BlogRoll from "../components/BlogRoll"
import CategoryBar from "../components/CategoryBar"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import OutlinedButton from "../components/OutlinedButton"

const Relay = ({ data }) => {
  return (
    <div>
      <FeatureImage image={data.image} />
      <CategoryBar />
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">{"Top Stories"}</Typography>
          </Grid>
        </Grid>
        <BlogRoll width={4} height={1} excerpt={false} />
        <Typography variant="h2">Covid Map</Typography>
        <Typography variant="h2">How To Help</Typography>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <OutlinedButton text="How to Help"></OutlinedButton>
          </Grid>
          <Grid item xs={3}>
            <OutlinedButton text="How to Donate"></OutlinedButton>
          </Grid>
          <Grid item xs={3}>
            <OutlinedButton text="How to Volunteer"></OutlinedButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Relay
export const pageQuery = graphql`
  query RelayQuery {
    image: file(relativePath: { eq: "feature-home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
