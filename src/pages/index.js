import React from "react"
import FeatureImage from "../components/FeatureImage"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import Posts from "../components/Posts"

const Relay = ({ data }) => {
  const { allWordpressPost } = data
  return (
    <div>
      <FeatureImage image={data.image}>
        <Typography variant="h1">Relay</Typography>
      </FeatureImage>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">{"Top Stories"}</Typography>
          </Grid>
        </Grid>
        <Posts allWordpressPost={allWordpressPost} />
        <Typography variant="h3">Covid Map</Typography>
        <iframe title="covid-map" src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA" style={{ width: '100%', height: '600px', border: '0px none' }} ></iframe>
        <Typography variant="h3">How To Help</Typography>
        <Grid container>
          <Grid item xs={12}>
            <Button>How to help</Button>
          </Grid>
          <Grid item xs={12}>
            <Button>How to donate</Button>
          </Grid>
          <Grid item xs={12}>
            <Button>How to Volunteer</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Relay
export const pageQuery = graphql`
  query RelayQuery {
    allWordpressPost(limit: 3) {
      edges {
        node {
          title
          id
          path
          featured_media {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    image: file(relativePath: { eq: "feature-home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
