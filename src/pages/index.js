import React from "react"
import FeatureImage from "../components/FeatureImage"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import Posts from "../components/Posts"
import { graphql } from "gatsby"
import CategoryList from "../components/CategoryList"

const Relay = ({ data }) => {
  const { allWpPost } = data
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
        <Posts nodes={allWpPost.nodes} />
        <CategoryList />
        <Typography variant="h3">Covid Map</Typography>
        <iframe
          title="covid-map"
          src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA"
          style={{ width: "100%", height: "600px", border: "0px none" }}
        ></iframe>
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
    allWpPost(limit: 3) {
      nodes {
        title
        id
        uri
        featuredImage {
          node {
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
