import React, { useState } from "react"
import People from "../../components/People"
import {
  Typography,
  Grid,
  Container,
  AppBar,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core"
import FeatureImage from "../../components/FeatureImage"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import BackBar from "../../components/BackBar"
import Theme from "../../gatsby-theme-material-ui-top-layout/theme"
import Footer from "../../components/Footer"
import { makeStyles, withStyles } from "@material-ui/core/styles"

const OurMission = ({ contentImage }) => {
  return (
    <>
      <SEO></SEO>
      <Grid item xs={12}>
        <Typography variant="h2">Our Mission</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="body1">
          We are a group of students hoping to educate and inform people during
          this difficult time. We have partnered with professionals around the
          country to help provide reliable sources and information. This summer,
          we decided to launch Relay, a resource to help families dealing with
          COVID-19.{" "}
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={4}>
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

// STYLING FOR THE TABS---------------------------------------
const StyledTabs = withStyles(theme => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      // maxWidth: 40, //To change the width of the tab indicator highlight
      width: "100%",
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />)

const useStyles = makeStyles(theme => ({
  styled: {
    backgroundColor: theme.palette.primary.dark,
  },
  mainPage: {
    backgroundColor: theme.palette.primary.lightGray,
  },
}))
// ------------------------------------------------------------------------

export const AboutPage = ({ data, location }) => {
  const classes = useStyles()
  const [value, setValue] = useState(
    (location && location.state && location.state.page) || 0
  )
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const { contentImage } = data
  return (
    <>
      <BackBar />
      <FeatureImage image={data.image}></FeatureImage>
      <div className={classes.styled}>
        <AppBar position="static" variant="outlined" color="transparent">
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            centered
          >
            <StyledTab label="Our Mission" />
            <StyledTab label="Our Team" />
          </StyledTabs>
        </AppBar>
      </div>
      <div className={classes.mainPage}>
        <Container fixed>
          <Grid container>
            {value === 0 ? (
              <OurMission contentImage={contentImage} />
            ) : (
              <OurTeam />
            )}
          </Grid>
        </Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPage {
    image: file(relativePath: { eq: "about.png" }) {
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
