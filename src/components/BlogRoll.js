import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

const BlogRoll = () => {
  const { wordpress } = useStaticQuery(graphql`
    query PostQuery {
      wordpress {
        posts {
          edges {
            node {
              id
              title
              uri
              excerpt
            }
          }
        }
      }
    }
  `)

  const { edges } = wordpress.posts
  return (
    <div>
      {edges.map(({ node }) => {
        return (
          <Card key={node.id}>
            <CardActionArea component={Link} to={node.uri}>
              <CardMedia></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">{node.title}</Typography>
                <Typography variant="body2" color="textSecondary">{node.excerpt}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">Share</Button>
              <Button size="small" color="primary">Learn More</Button>
            </CardActions>
          </Card>)
      })}
    </div>
  )
}

export default BlogRoll
