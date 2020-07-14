import React from 'react'
import FeatureImage from '../components/FeatureImage'
import BlogRoll from '../components/BlogRoll'
import CategoryBar from '../components/CategoryBar'

const Relay = ({ data }) => {
  return (
    <div>
      <FeatureImage image={data.image} />
      <CategoryBar />
      <BlogRoll />
    </div>
  )
}

export default Relay
export const pageQuery = graphql`
  query IndexPageTemplate {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`