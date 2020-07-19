import React from "react"
import { Typography, Container, Grid } from "@material-ui/core"
import FeatureImage from "../../components/FeatureImage"
import Posts from "../../components/Posts"

const Index = ({ data }) => {
  const { allWpPostArchive } = data
  const { allWpPostRecent } = data
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
            <Posts allWpPost={allWpPostRecent} sizes={[12, 4, 4, 4, 6, 6]} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1">Archive</Typography>
          </Grid>
          <Grid item xs={12}>
            <Posts allWpPost={allWpPostArchive} variant="list" />
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
    allWpPostRecent: allWpPost(limit: 6) {
      edges {
        node {
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
    }
    allWpPostArchive: allWpPost(limit: 20, skip: 6) {
      edges {
        node {
          title
          id
          uri
          date(fromNow: true)
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
    }
  }
`
