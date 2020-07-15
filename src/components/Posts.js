import React from 'react'
import { Card, CardHeader, Typography, CardContent, CardMedia, Grid, CardActionArea, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = ({ node }) => {
  const fluid = node.featured_media.localFile.childImageSharp.fluid
  console.log('node', node)
  return (
    <Card>
      <CardActionArea component={Link} to={node.path}>
        <CardHeader title={node.title} />
        <CardMedia component={Img} fluid={fluid}>
        </CardMedia>
        <CardContent>
          <Typography variant="body1">{node.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const PostsGrid = ({ allWordpressPost, sizes }) => {
  const { edges } = allWordpressPost
  return (
    <>
      <Grid container spacing={3}>
        {edges.map(({ node }, i) => {
          return (
            <Grid item key={node.id} xs={sizes[i] || 12}>
              <Post node={node} />
            </Grid>)
        })}
      </Grid>
    </>
  )
}

const PostsList = ({ allWordpressPost }) => {
  const { edges } = allWordpressPost
  return (
    <>
      <List>
        {edges.map(({ node }) => {
          const fluid = node.featured_media.localFile.childImageSharp.fluid
          return (
            <ListItem button key={node.id} component={Link} to={node.path}>
              <ListItemAvatar>
                <Avatar component={Img} fluid={fluid} />
              </ListItemAvatar>
              <ListItemText primary={node.title} secondary={node.date} />
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

const Posts = ({ allWordpressPost, sizes = [], variant = 'grid' }) => {
  if (variant === 'grid') {
    return <PostsGrid allWordpressPost={allWordpressPost} sizes={sizes} />
  } else {
    return <PostsList allWordpressPost={allWordpressPost} />
  }
}

export default Posts
