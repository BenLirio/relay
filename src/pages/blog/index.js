import React from "react"
import { Typography, Container, Grid } from "@material-ui/core"
import FeatureImage from "../../components/FeatureImage"
import Posts from "../../components/Posts"

const Index = ({ data }) => {
  const { allWordpressPostArchive } = data
  const { allWordpressPostRecent } = data
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1" color="primary">
          Feature Image
        </Typography>
      </FeatureImage>
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h1">New Posts</Typography>
          </Grid>
          <Grid item xs={12}>
            <Posts allWordpressPost={allWordpressPostRecent} sizes={[12, 4, 4, 4, 6, 6]} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1">Archive</Typography>
          </Grid>
          <Grid item xs={12}>
            <Posts allWordpressPost={allWordpressPostArchive} variant="list" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query TipsAndAdviceQuery {
    image: file(relativePath: { eq: "feature-tips.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allWordpressPostRecent: allWordpressPost(limit: 6) {
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
    allWordpressPostArchive: allWordpressPost(limit: 20, skip: 6) {
      edges {
        node {
          title
          id
          path
          date(fromNow: true)
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
  }
`
