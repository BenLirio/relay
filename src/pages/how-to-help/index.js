import React from 'react'
import { Typography } from '@material-ui/core'

const HowToHelp = () => {
  return (
    <div>
      <Typography variant="h1">How TO Help</Typography>
    </div>
  )
}

export default HowToHelp
export const howToHelpQuery = graphql`
  query howToHelpQuery {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

