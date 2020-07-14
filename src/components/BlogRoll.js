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
  CardHeader,
} from "@material-ui/core"

const BlogRoll = ({ width = 2, height = 3, excerpt = true }) => {
  const { allWordpressPost } = useStaticQuery(graphql`
    query PostQuery {
      allWordpressPost(limit: 24) {
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
  return (
    <Grid container spacing={3}>
      {[...edges].splice(0, width * height).map(({ node }) => {
        const image = node.featured_media.localFile.childImageSharp.fluid.src
        return (
          <Grid key={node.id} item xs={12 / width}>
            <Card key={node.id}>
              <CardActionArea component={Link} to={node.path}>
                <CardHeader title={node.title} />
                <CardMedia
                  style={{
                    height: "200px",
                  }}
                  image={image}
                ></CardMedia>
                {excerpt ?
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {node.excerpt}
                    </Typography>
                  </CardContent> : null}
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
