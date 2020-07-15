import React from 'react'
import { Card, CardHeader, Typography, CardContent, CardMedia, Grid, CardActionArea } from '@material-ui/core'
import { Link } from 'gatsby'

const Post = ({ node }) => {
  const image = node.featured_media.localFile.childImageSharp.fluid.src
  console.log('image', image)
  return (
    <Card>
      <CardActionArea component={Link} to={node.path}>
        <CardHeader title={node.title} />
        <CardMedia style={{ height: 200 }} image={image}>
        </CardMedia>
        <CardContent>
          <Typography variant="body1">{node.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Posts = ({ allWordpressPost }) => {
  const { edges } = allWordpressPost
  return (
    <>
      <Grid container spacing={3}>

        {edges.map(({ node }) => {
          return (
            <Grid item key={node.id}>
              <Post node={node} />
            </Grid>)
        })}
      </Grid>
    </>
  )
}

export default Posts
