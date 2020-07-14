import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Relay</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/how-to-help">How To Help</Button>
          <Button color="inherit" component={Link} to="/blog">Tips & Advice</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Navbar
