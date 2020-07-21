import React from 'react'
import { graphql } from 'gatsby'
import { Typography, Container, Grid, Divider, Button } from '@material-ui/core'
import Posts from '../components/Posts'
import Post from '../components/shared/Post'
import { Link } from 'gatsby-theme-material-ui'

const CategoryPage = ({ data }) => {
  const { wpCategory } = data
  const posts = wpCategory.posts.nodes
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Link to="/" >Home Page</Link>
          <Typography variant="h2">{wpCategory.name}</Typography>
        </Grid>
        <Divider style={{ width: '100%', height: '2px', background: '#333333' }} />
        <Grid item xs={8}>
          <Post post={posts[0]} image="mid" />
          <Divider style={{ width: '100%', height: '1px' }} />
          <Post post={posts[1]} />
        </Grid>
        <Divider orientation="vertical" style={{ width: '1px' }} flexItem />
        <Grid item xs>
          <Post post={posts[2]} />
          <Divider style={{ width: '100%', height: '1px' }} />
          <Post post={posts[3]} />
          <Divider style={{ width: '100%', height: '1px' }} />
          <Post post={posts[4]} />
        </Grid>
        <Divider style={{ width: '100%', height: '1px', marginBottom: '2px', marginTop: '4px' }} />
        <Divider style={{ width: '100%', height: '1px' }} />
        <Grid item xs={12} style={{ marginTop: '16px' }}>
          <Typography variant="h2">Archive</Typography>
        </Grid>
        {[...posts].splice(5).map(post => {
          return (
            <Grid item xs={4}>
              <Post post={post} image="top" />
            </Grid>
          )
        })}
      </Grid>
    </Container>
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
