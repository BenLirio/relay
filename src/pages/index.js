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
  Hidden,
  ButtonBase,
} from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import CategoryBar from "../components/CategoryBar"
import Img from "gatsby-image"
import Post from "../components/shared/Post"
import Helmet from "react-helmet"
import SEO from "../components/SEO"
import Footer from "../components/Footer"
import IconCta from "../components/IconCta"
import { Link } from "gatsby-plugin-material-ui"

const Relay = ({ data }) => {
  const { allWpPost } = data
  const clonePosts = allWpPost.nodes.slice()
  const otherPosts = clonePosts.splice(4, 4)
  const firstPost = allWpPost.nodes[0]
  const goToAbout = () => {
    navigate("/about")
  }
  return (
    <>
      <SEO></SEO>
      <Container>
        <Grid style={{ marginTop: "24px" }} container spacing={3}>
          <Grid style={{ marginBottom: "16px" }} container justify="center">
            <Grid item style={{ marginBottom: "24px" }}>
              <Hidden only="xs">
                <Typography variant="h1" style={{ textAlign: "center" }}>
                  The Relay Resource
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant="h2" style={{ textAlign: "center" }}>
                  The Relay Resource
                </Typography>
              </Hidden>
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
          {/* XS UP */}
          <Hidden smDown>
            <Grid item xs={12} container spacing={3}>
              <Grid item xs={9} container spacing={3}>
                <Grid item xs={5}>
                  <Post post={allWpPost.nodes[0]} image="mid" />
                </Grid>
                <Grid item xs={7}>
                  <iframe
                    title="covid-map"
                    src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA"
                    style={{
                      width: "100%",
                      height: "600px",
                      border: "0px none",
                    }}
                  ></iframe>
                </Grid>
              </Grid>
              <Divider
                orientation="vertical"
                style={{ width: "1px" }}
                flexItem
              />
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
          </Hidden>

          {/* XS */}
          <Hidden mdUp>
            <Grid item xs={12}>
              <Post post={allWpPost.nodes[0]} image="mid" />
            </Grid>
            <Grid item xs={12}>
              <iframe
                title="covid-map"
                src="https://ourworldindata.org/grapher/total-deaths-covid-19?country=ITA+ESP+USA"
                style={{ width: "100%", height: "600px", border: "0px none" }}
              ></iframe>
            </Grid>
            <Grid item xs={12}>
              <Post post={allWpPost.nodes[1]} />
            </Grid>
            <Grid item xs={12}>
              <Post post={allWpPost.nodes[2]} />
            </Grid>
          </Hidden>
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
          <Grid item xs={12} container spacing={3}>
            <IconCta to="/about">
              <Box display="flex" flexDirection="column">
                <Img
                  style={{ width: "100px" }}
                  fixed={data.donateImage.childImageSharp.fixed}
                />
                <Typography variant="subtitle1">How To Donate</Typography>
              </Box>
            </IconCta>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <IconCta to="about">
              <Box display="flex" flexDirection="column">
                <Img
                  style={{ width: "100px" }}
                  fixed={data.helpImage.childImageSharp.fixed}
                />
                <Typography variant="subtitle1">How To Help</Typography>
              </Box>
            </IconCta>
            <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
            <IconCta to="/about">
              <Box display="flex" flexDirection="column">
                <Img
                  style={{ width: "100px" }}
                  fixed={data.advocateImage.childImageSharp.fixed}
                />
                <Typography variant="subtitle1">How To Advocate</Typography>
              </Box>
            </IconCta>
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
          <Hidden only="xs">
            <Grid item xs={12} container spacing={3}>
              <Grid item xs={8} container spacing={3}>
                <Post post={allWpPost.nodes[3]} />
              </Grid>
              <Divider
                orientation="vertical"
                style={{ width: "1px", margin: "4px" }}
                flexItem
              />
              <Grid
                item
                xs
                container
                spacing={3}
                direction="column"
                alignContent="center"
                alignItems="center"
              >
                <Grid item xs>
                  <Typography variant="h5">Made by students</Typography>
                </Grid>
                <Grid item xs>
                  <Button onClick={goToAbout} variant="outlined">
                    Meet The Team
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button onClick={goToAbout} variant="outlined">
                    Our Mission
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item xs={12}>
              <Post post={allWpPost.nodes[3]} />
            </Grid>
          </Hidden>
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
                <Grid key={post.id} item xs={12} sm>
                  <Post post={post} image="top" />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
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
        author {
          node {
            name
          }
        }
        acfAuthor {
          firstName
          lastName
        }
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
    advocateImage: file(relativePath: { eq: "advocate.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    donateImage: file(relativePath: { eq: "donate.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    helpImage: file(relativePath: { eq: "help.png" }) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
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
