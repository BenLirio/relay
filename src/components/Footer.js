import React from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  ThemeProvider,
  useTheme,
  createMuiTheme,
  Button,
  makeStyles,
  withStyles,
  IconButton,
  SvgIcon,
} from "@material-ui/core"
import TwitterIcon from "@material-ui/icons/Twitter"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import YouTubeIcon from "@material-ui/icons/YouTube"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import Theme from "../gatsby-theme-material-ui-top-layout/theme"
import { Link } from "gatsby"

const FooterSection = ({ children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Grid container alignItems="center" direction="column">
        {children}
      </Grid>
    </Grid>
  )
}

//Custom 'ColorButton' for the footer-------------------
const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    backgroundColor: "transparent",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}))(Button)
//------------------------------------------------------

const useStyles = makeStyles(theme => {
  return {
    footer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundColor: theme.palette.primary.darkGray, //Footer background color
    },
  }
})

const Footer = () => {
  const theme = useTheme()
  const themeDark = createMuiTheme({
    ...theme,
    palette: {
      type: "dark",
    },
  })
  const classes = useStyles()

  return (
    <ThemeProvider theme={themeDark}>
      <Box className={classes.footer}>
        <Container fixed>
          <Grid container>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">
                  About Us
                </Typography>
              </Grid>
              <Grid item>
                <ColorButton component={Link} to="/about" state={{ page: 0 }}>
                  Our Mission
                </ColorButton>
              </Grid>
              <Grid item>
                <ColorButton component={Link} to="/about" state={{ page: 1 }}>
                  Our Team
                </ColorButton>
              </Grid>
            </FooterSection>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item>
                {/* This 'onClick' function opens the link in a new Tab. Taken from https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react */}
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/therelayresource/",
                      "_blank"
                    )
                  }
                  rel="noopener noreferrer"
                  aria-label="Follow on Facebook"
                >
                  <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open("https://twitter.com/relayresource", "_blank")
                  }
                  rel="noopener noreferrer"
                  aria-label="Follow on Twitter"
                >
                  <TwitterIcon></TwitterIcon>
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/therelayresource/",
                      "_blank"
                    )
                  }
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon></InstagramIcon>
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/channel/UCj2DsuEKQgXU5aydu6WI4QQ",
                      "_blank"
                    )
                  }
                  rel="noopener noreferrer"
                  aria-label="Follow on YouTube"
                >
                  <YouTubeIcon></YouTubeIcon>
                </IconButton>
                <IconButton
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/relay-resource/",
                      "_blank"
                    )
                  }
                  rel="noopener noreferrer"
                  aria-label="Follow on LinkedIn"
                >
                  <LinkedInIcon></LinkedInIcon>
                </IconButton>
              </Grid>
            </FooterSection>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">
                  How To Help
                </Typography>
              </Grid>
              <Grid item>
                <ColorButton component={Link} to="/how-to-help">
                  How To Donate
                </ColorButton>
              </Grid>
              <Grid item>
                <ColorButton component={Link} to="/how-to-help">
                  How To Volunteer
                </ColorButton>
              </Grid>
              <Grid item>
                <ColorButton component={Link} to="/how-to-help">
                  How To Advocate
                </ColorButton>
              </Grid>
            </FooterSection>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
export default Footer
