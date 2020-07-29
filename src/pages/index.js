import React from "react"
import FeatureImage from "../components/FeatureImage"
import {
  Button,
  Container,
  Grid,
  Typography,
  Divider,
  Card,
  CardHeader,
  CardMedia,
  Box,
  makeStyles,
  Link,
} from "@material-ui/core"
import { graphql } from "gatsby"
import CategoryBar from "../components/CategoryBar"
import Img from "gatsby-image"
import Post from "../components/shared/Post"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

const Relay = ({ data }) => {
  const { allWpPost } = data
  const clonePosts = allWpPost.nodes.slice()
  const otherPosts = clonePosts.splice(4, 4)
  const firstPost = allWpPost.nodes[0]
  return (
    <div>
      <SEO></SEO>
      <Container>
        <Grid style={{ marginTop: "24px" }} container spacing={3}>
          <Grid style={{ marginBottom: "16px" }} container justify="center">
            <Grid item style={{ marginBottom: "24px" }}>
              <Typography variant="h1">The Relay Resource</Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Divider
              variant="fullWidth"
              style={{ width: "100%", height: "1px" }}
            />
            <CategoryBar />
            <Divider
              variant="fullWidth"
              style={{ width: "100%", height: "1px" }}
            />
          </Grid>
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={9} container spacing={3}>
              <Grid item xs={5}>
                <Post post={allWpPost.nodes[0]} image="mid" />
              </Grid>
              <Grid item xs={7}>
                <iframe
                  title="covid-map"
                  src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA"
                  style={{ width: "100%", height: "600px", border: "0px none" }}
                ></iframe>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <Grid item xs={3} container direction="column">
              <Grid item>
                <Post post={allWpPost.nodes[1]} />
              </Grid>
              <Divider flexItem style={{ width: "100%", height: "1px" }} />
              <Grid item>
                <Post post={allWpPost.nodes[2]} />
              </Grid>
            </Grid>
          </Grid>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              marginBottom: "2px",
              marginTop: "8px",
            }}
            flexItem
          />
          <Divider
            style={{ width: "100%", height: "1px", marginBottom: "8px" }}
            flexItem
          />
          <Grid container item xs={12} justify="space-between" spacing={3}>
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Donate</Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  href="/how-to-help/"
                  variant="contained"
                >
                  How to Donate
                </Button>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Volunteer</Typography>

                <Button
                  variant="outlined"
                  color="primary"
                  href="/how-to-help/"
                  variant="contained"
                >
                  How to Volunteer
                </Button>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Advocate</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/how-to-help/"
                  variant="contained"
                >
                  How to Advocate
                </Button>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              marginTop: "8px",
              marginBottom: "8px",
            }}
            flexItem
          />
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={8} container spacing={3}>
              <Post post={allWpPost.nodes[3]} />
            </Grid>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <Grid item xs>
              <Typography variant="h5">Who are we?</Typography>

              <Button
                mt={1}
                style={{
                  backgroundColor: "#559cd1",
                  margin: "5px",
                }}
                variant="contained"
                href="/about"
              >
                Meet The Team
              </Button>

              <Button
                mt={1}
                style={{
                  backgroundColor: "#559cd1",
                  margin: "5px",
                }}
                href="/about"
                variant="contained"
              >
                Our Mission
              </Button>
            </Grid>
          </Grid>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              marginBottom: "2px",
              marginTop: "8px",
            }}
            flexItem
          />
          <Divider
            style={{ width: "100%", height: "1px", marginBottom: "8px" }}
            flexItem
          />
          <Grid container item xs={12} spacing={3} justify="space-between">
            {otherPosts.map(post => {
              return (
                <Grid key={post.id} item xs>
                  <Post post={post} image="top" />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Relay
export const pageQuery = graphql`
  query RelayQuery {
    allWpPost(limit: 10) {
      nodes {
        title
        id
        excerpt
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid {
                  aspectRatio
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
