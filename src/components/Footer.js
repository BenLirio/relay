import React from 'react'
import { Box, Container, Grid, Typography, ThemeProvider, useTheme, createMuiTheme, Button, makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'

const FooterSection = ({ children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Grid container alignItems="center" direction="column">{children}</Grid>
    </Grid>
  )
}

const useStyles = makeStyles(theme => {
  return {
    footer: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  }
})

const Footer = () => {
  const theme = useTheme()
  const themeDark = createMuiTheme({
    ...theme,
    palette: {
      type: 'dark',
    }
  })
  const classes = useStyles()

  return (
    <ThemeProvider theme={themeDark}>
      <Box bgcolor="background.paper" className={classes.footer}>

        <Container fixed>
          <Grid container>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">About Us</Typography>
              </Grid>
              <Grid item>
                <Button component={Link} to="/about" state={{ page: 0 }}>Our Mission</Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/about" state={{ page: 1 }}>Our Team</Button>
              </Grid>
            </FooterSection>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">Contact Us</Typography>
              </Grid>
            </FooterSection>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">How To Help</Typography>
              </Grid>
              <Grid item>
                <Button>How To Donate</Button>
              </Grid>
              <Grid item>
                <Button>How To Volunteer</Button>
              </Grid>
              <Grid item>
                <Button>How To Advocate</Button>
              </Grid>
            </FooterSection>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
export default Footer