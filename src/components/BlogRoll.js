import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core"

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
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = wordpress.posts
  console.log("edges", edges)
  return (
    <Grid container spacing={3}>
      {edges.map(({ node }) => {
        return (
          <Grid key={node.id} item xs={6}>
            <Card key={node.id}>
              <CardActionArea component={Link} to={node.uri}>
                <CardMedia
                  style={{
                    height: "200px",
                  }}
                  image={node.featuredImage.node.mediaItemUrl}
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {node.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {node.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default BlogRoll
