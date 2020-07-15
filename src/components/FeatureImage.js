import React from 'react'
import Img from 'gatsby-image'


const FeatureImage = ({ image }) => {
  return (
    <Img style={{ height: 400 }} fluid={image.childImageSharp.fluid}></Img>

  )
}

export default FeatureImage
