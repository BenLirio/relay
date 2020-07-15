import React from 'react'
import { Box, Container, Grid, Typography, ThemeProvider, useTheme, createMuiTheme, Button } from '@material-ui/core'

const FooterSection = ({ children }) => {
  return (
    <Grid item xs={4}>
      <Grid container alignItems="center" direction="column">{children}</Grid>
    </Grid>
  )
}

const Footer = () => {
  const theme = useTheme()
  const themeDark = createMuiTheme({
    ...theme,
    palette: {
      type: 'dark',
    }
  })
  return (
    <ThemeProvider theme={themeDark}>
      <Box bgcolor="background.paper">
        <Container fixed>
          <Grid container>
            <FooterSection>
              <Grid item>
                <Typography variant="h4" color="textPrimary">About Us</Typography>
              </Grid>
              <Grid item>
                <Button>Our Mission</Button>
              </Grid>
              <Grid item>
                <Button>Our Team</Button>
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