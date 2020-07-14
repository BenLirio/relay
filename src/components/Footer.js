import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'

const Footer = class extends React.Component {
  render() {
    return (
      <Box bgcolor="primary.main">
        <Container fixed>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h4">About Us</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4">How to Help</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
}

export default Footer
