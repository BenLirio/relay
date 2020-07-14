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
  const { allWordpressPost } = useStaticQuery(graphql`
    query PostQuery {
      allWordpressPost {
        edges {
          node {
            title
            path
            id
            excerpt
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges } = allWordpressPost
  console.log("edges", edges)
  return (
    <Grid container spacing={3}>
      {edges.map(({ node }) => {
        const image = node.featured_media.localFile.childImageSharp.fluid.src
        return (
          <Grid key={node.id} item xs={6}>
            <Card key={node.id}>
              <CardActionArea component={Link} to={node.path}>
                <CardMedia
                  style={{
                    height: "200px",
                  }}
                  image={image}
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
