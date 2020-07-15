import React from "react"
import { Typography } from "@material-ui/core"
import BlogRoll from "../../components/BlogRoll"
import CategoryBar from "../../components/CategoryBar"
import FeatureImage from "../../components/FeatureImage"

const Index = ({ data }) => {
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1" color="primary">
          Feature Image
        </Typography>
      </FeatureImage>
      <CategoryBar />
      <BlogRoll />
    </>
  )
}

export default Index

export const pageQuery = graphql`
  query TipsAndAdviceQuery {
    image: file(relativePath: { eq: "feature-tips.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
