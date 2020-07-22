import React, { useRef, useEffect, useState } from 'react'
import { Typography, Grid, Box, useTheme, Link, ButtonBase } from '@material-ui/core'
import Img from 'gatsby-image'
import { Link as GatsbyLink } from 'gatsby'

const PostTitle = ({ title, size }) => {
  let titleSize
  switch (size) {
    case 'lg':
      titleSize = 'h4'
      break
    case 'md':
      titleSize = 'h5'
      break
    case 'sm':
      titleSize = 'h6'
      break
  }
  return (
    <Typography variant={titleSize}>
      {title}
    </Typography>
  )
}

const PostFeaturedImage = ({ featuredImage }) => {
  const theme = useTheme()
  return (
    <>
      <Img fluid={featuredImage.node.localFile.childImageSharp.fluid} />
      <div style={{ marginTop: theme.spacing(3) }}></div>
    </>
  )
}

const PostExcerpt = ({ excerpt }) => {

  let formatedExcerpt = ''
  const re = /<p>(.*)<\/p>/
  const parsedExcerpt = excerpt.split(re)
  if (parsedExcerpt.length === 3) {
    formatedExcerpt = parsedExcerpt[1]
  } else {
    formatedExcerpt = parsedExcerpt[0]
  }
  formatedExcerpt = formatedExcerpt.replace(/\W\[.*\]/, ' ...')
  return <Typography variant="body2" color="textSecondary">{formatedExcerpt}</Typography>
}

const Post = ({ post, size = 'md', featuredImage = false, image = 'none' }) => {
  const theme = useTheme()
  return (
    <ButtonBase style={{ paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2) }} component={GatsbyLink} to={post.uri}>
      <Grid container spacing={1} direction="column">
        <Grid item>
          {image === 'top' ? <PostFeaturedImage featuredImage={post.featuredImage} /> : null}
          <PostTitle title={post.title} uri={post.uri} size={size} />
        </Grid>
        <Grid item>
          {image === 'mid' ? <PostFeaturedImage featuredImage={post.featuredImage} /> : null}
          <PostExcerpt excerpt={post.excerpt} />
        </Grid>
      </Grid>
    </ButtonBase>
  )
}

export default Post