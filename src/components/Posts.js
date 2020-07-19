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

const PostsGrid = ({ nodes }) => {
  return (
    <>
      <Grid container spacing={3} alignItems="stretch">
        {nodes.map((node) => {
          return (
            <Grid item key={node.id} xs={12}>
              <Post node={node} />
            </Grid>)
        })}
      </Grid>
    </>
  )
}

const PostsList = ({ nodes }) => {
  return (
    <>
      <List>
        {nodes.map((node) => {
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

const Posts = ({ nodes, variant = 'grid' }) => {
  if (variant === 'grid') {
    return <PostsGrid nodes={nodes} />
  } else {
    return <PostsList nodes={nodes} />
  }
}

export default Posts
