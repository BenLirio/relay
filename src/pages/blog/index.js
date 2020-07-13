import React from 'react'
import { Button, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Link } from 'gatsby'
import CategoryBar from '../../components/CategoryBar'
import FeatureImage from '../../components/FeatureImage'


const Index = ({ data }) => {
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1" color="primary">Feature Image</Typography>
      </FeatureImage>
      <h1>Categories</h1>
      <CategoryBar categories={data.wordpress.categories} />
      <Button>test</Button>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index



export const pageQuery = graphql`
  query PostPageTemplate {
    wordpress {
      categories {
        edges {
          node {
            name
            id
            uri
          }
        }
      }
    }
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

