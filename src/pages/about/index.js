import React, { useState } from "react"
import People from "../../components/People"
import { Typography, Grid, Container, AppBar, Tabs, Tab } from "@material-ui/core"
import FeatureImage from "../../components/FeatureImage"

export const AboutPage = ({ data }) => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
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
          <Grid item xs={12}>
            <People />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    image: file(relativePath: { eq: "home-jumbotron.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
