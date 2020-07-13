import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">The Relay Resource</Typography>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/how-to-help">How To Help</Button>
          <Button color="inherit" component={Link} to="/blog">Tips & Advice</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
