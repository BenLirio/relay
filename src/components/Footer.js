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
} from "@material-ui/core"
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
