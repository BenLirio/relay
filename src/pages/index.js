import React from "react"
import FeatureImage from "../components/FeatureImage"
import { Button, Container, Grid, Typography, Divider, Card, CardHeader, CardMedia, Box } from "@material-ui/core"
import { graphql } from 'gatsby'
import CategoryBar from "../components/CategoryBar"
import Img from 'gatsby-image'

const Relay = ({ data }) => {
  const { allWpPost } = data
  const clonePosts = allWpPost.nodes.slice()
  const otherPosts = clonePosts.splice(4, 4)
  const firstPost = allWpPost.nodes[0]
  return (
    <div>
      <Container>
        <Grid style={{ marginTop: '24px' }} container spacing={3}>
          <Grid style={{ marginBottom: '16px' }} container justify="center">
            <Grid item style={{ marginBottom: '24px' }}>
              <Typography variant="h1">The Relay Resource</Typography>
            </Grid>
            <Grid item xs={12}></Grid>
            <Divider variant="fullWidth" style={{ width: '100%', height: '1px' }} />
            <CategoryBar />
            <Divider variant="fullWidth" style={{ width: '100%', height: '1px' }} />
          </Grid>
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={9} container spacing={3}>
              <Grid item xs={5}>
                <Typography variant="h5">{firstPost.title}</Typography>
                <Img fluid={firstPost.featuredImage.node.localFile.childImageSharp.fluid}></Img>
                <Typography variant="body2" color="textSecondary"><span dangerouslySetInnerHTML={{ __html: allWpPost.nodes[0].excerpt }}></span></Typography>
              </Grid>
              <Grid item xs={7}>
                <iframe title="covid-map" src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA" style={{ width: '100%', height: '600px', border: '0px none' }} ></iframe>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: '1px' }} flexItem />
            <Grid item xs={3} container direction="column">
              <Grid item>
                <Typography variant="h6">{allWpPost.nodes[1].title}</Typography>
                <Typography variant="body2" color="textSecondary"><span dangerouslySetInnerHTML={{ __html: allWpPost.nodes[1].excerpt }}></span></Typography>
              </Grid>
              <Divider flexItem style={{ width: '100%', height: '1px' }} />
              <Grid item>
                <Typography variant="h6">{allWpPost.nodes[2].title}</Typography>
                <Typography variant="body2" color="textSecondary"><span dangerouslySetInnerHTML={{ __html: allWpPost.nodes[2].excerpt }}></span></Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ width: '100%', height: '1px', marginBottom: '2px', marginTop: '8px' }} flexItem />
          <Divider style={{ width: '100%', height: '1px', marginBottom: '8px' }} flexItem />
          <Grid container item xs={12} justify="space-between" spacing={3}>
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Donate</Typography>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: '1px' }} flexItem />
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Volunteer</Typography>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: '1px' }} flexItem />
            <Grid item xs container direction="row" justify="space-evenly">
              <Grid item>
                <Typography>How to Advocate</Typography>
              </Grid>
              <Grid item>
                <Box height="100px" width="100px" bgcolor="grey.900"></Box>
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ width: '100%', height: '1px', marginTop: '8px', marginBottom: '8px' }} flexItem />
          <Grid item xs={12} container spacing={3}>
            <Grid item xs={8} container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h5">{allWpPost.nodes[3].title}</Typography>
                <Typography variant="body2" color="textSecondary"><span dangerouslySetInnerHTML={{ __html: allWpPost.nodes[3].excerpt }}></span></Typography>
              </Grid>
              <Grid item xs={6}>
                <Img fluid={allWpPost.nodes[3].featuredImage.node.localFile.childImageSharp.fluid}></Img>
              </Grid>
            </Grid>
            <Divider orientation="vertical" style={{ width: '1px' }} flexItem />
            <Grid item xs>
              <Typography variant="h5">Who are we?</Typography>
              <Button>Meet The Team</Button>
              <Button>Our Mission</Button>
            </Grid>
          </Grid>
          <Divider style={{ width: '100%', height: '1px', marginBottom: '2px', marginTop: '8px' }} flexItem />
          <Divider style={{ width: '100%', height: '1px', marginBottom: '8px' }} flexItem />
          <Grid container item xs={12} spacing={3} justify="space-between">
            {otherPosts.map(({ id, title, featuredImage, excerpt }) => {
              return (
                <Grid key={id} item xs>
                  <Img fluid={featuredImage.node.localFile.childImageSharp.fluid}></Img>
                  <Typography variant={"h6"}>{title}</Typography>
                  <Typography variant="body2" color="textSecondary"><span dangerouslySetInnerHTML={{ __html: excerpt }}></span></Typography>
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
