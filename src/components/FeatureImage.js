import React from 'react'
import Img from 'gatsby-image'
import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  caption: {
    position: 'absolute',
  },
})

const FeatureImage = ({ image, children }) => {
  const classes = useStyles()
  const fluid = image.childImageSharp.fluid
  return (
    <div className={classes.root}>
      <Box className={classes.image} component={Img} fluid={fluid}></Box>
      <Box className={classes.caption}>{children}</Box>
    </div>
  )
}

export default FeatureImage
