import React, { useState, useEffect } from "react"
import People from "../../components/People"
import { Typography, Grid, Container, AppBar, Tabs, Tab } from "@material-ui/core"
import FeatureImage from "../../components/FeatureImage"
import Img from 'gatsby-image'

const OurMission = ({ contentImage }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2">Our Mission</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">We are a group of students hoping to educate and inform people during this difficult time. We have partnered with professionals around the country to help provide reliable sources and information. This summer, we decided to launch Relay, a resource to help families dealing with COVID-19.  </Typography>
      </Grid>
      <Grid item xs={12}>
        <Img fluid={contentImage.childImageSharp.fluid}></Img>
      </Grid>
    </>
  )
}
const OurTeam = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2">Our Team</Typography>
      </Grid>
      <People />
    </>
  )
}

export const AboutPage = ({ data, location }) => {
  const [value, setValue] = useState((location.state && location.state.page) || 0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { contentImage } = data
  useEffect(() => {
    if (location.state.page != undefined) {
      handleChange('_', location.state.page)
    }
  }, [location.state.page])
  return (
    <>
      <FeatureImage image={data.image}>
        <Typography variant="h1">About</Typography>
      </FeatureImage>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Our Mission" />
          <Tab label="Our team" />
        </Tabs>
      </AppBar>
      <Container fixed>
        <Grid container>
          {value === 0 ? <OurMission contentImage={contentImage} /> : <OurTeam />}
        </Grid>
      </Container>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    image: file(relativePath: { eq: "feature-about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contentImage: file(relativePath: { eq: "content.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
