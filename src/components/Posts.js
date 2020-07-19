import React from 'react'
import { Card, CardHeader, Typography, CardContent, CardMedia, Grid, CardActionArea, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = ({ node }) => {
  const fluid = node.featuredImage.node.localFile.childImageSharp.fluid
  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea component={Link} to={node.uri} style={{ height: '100%' }}>
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

const PostsGrid = ({ allWpPost }) => {
  const { edges } = allWpPost
  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {edges.map(({ node }, i) => {
          return (
            <Grid item key={node.id} xs={12}>
              <Post node={node} />
            </Grid>)
        })}
      </Grid>
    </>
  )
}

const PostsList = ({ allWpPost }) => {
  const { edges } = allWpPost
  return (
    <>
      <List>
        {edges.map(({ node }) => {
          const fluid = node.featuredImage.node.localFile.childImageSharp.fluid
          return (
            <ListItem button key={node.id} component={Link} to={node.uri}>
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

const Posts = ({ allWpPost, variant = 'grid' }) => {
  if (variant === 'grid') {
    return <PostsGrid allWpPost={allWpPost} />
  } else {
    return <PostsList allWpPost={allWpPost} />
  }
}

export default Posts
