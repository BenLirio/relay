import React from "react"
import { graphql } from "gatsby"
import { Typography, Container, Grid, Divider, Button, Hidden } from "@material-ui/core"
import Posts from "../components/Posts"
import Post from "../components/shared/Post"
import SEO from "../components/SEO"
import { Link } from "gatsby-theme-material-ui"

const CategoryPage = ({ data }) => {
  const { wpCategory } = data
  const posts = wpCategory.posts.nodes
  return (
    <Container>
      <SEO></SEO>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link to="/">Home Page</Link>
          <Typography variant="h2">{wpCategory.name}</Typography>
        </Grid>
        <Divider
          style={{ width: "100%", height: "2px", background: "#333333" }}
        />
        <Hidden only="xs">
          <Grid item xs={8}>
            {posts[0] ? <Post post={posts[0]} image="mid" /> : null}
            <Divider style={{ width: "100%", height: "1px" }} />
            {posts[1] ? <Post post={posts[1]} /> : null}
          </Grid>
          <Divider orientation="vertical" style={{ width: "1px" }} flexItem />
          <Grid item xs>
            {posts[2] ? <Post post={posts[2]} /> : null}
            <Divider style={{ width: "100%", height: "1px" }} />
            {posts[3] ? <Post post={posts[3]} /> : null}
            <Divider style={{ width: "100%", height: "1px" }} />
            {posts[4] ? <Post post={posts[4]} /> : null}
          </Grid>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              marginBottom: "2px",
              marginTop: "4px",
            }}
          />
          <Divider style={{ width: "100%", height: "1px" }} />
          <Grid item xs={12} style={{ marginTop: "16px" }}>
            <Typography variant="h2">Archive</Typography>
          </Grid>
          {[...posts].splice(5).map(post => {
            return (
              <Grid key={post.id} item xs={4}>
                <Post post={post} image="top" />
              </Grid>
            )
          })}
        </Hidden>
        <Hidden smUp>
          {[...posts].map(post => {
            return (
              <Grid key={post.id} item xs={12}>
                <Post post={post} image="mid" />
              </Grid>
            )
          })}
        </Hidden>
      </Grid>
    </Container >
  )
}

export default CategoryPage

export const pageQuery = graphql`
  query WordpressCategoryByID($id: String!) {
    wpCategory(id: { eq: $id }) {
      name
      posts {
        nodes {
          title
          id
          uri
          excerpt
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
