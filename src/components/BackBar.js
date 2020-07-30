import React from 'react'
import { AppBar, Toolbar, Button, IconButton, Typography } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { navigate } from 'gatsby'

const BackBar = () => {
  const goBack = () => {
    navigate('/')
  }
  return (
    <>
      <AppBar position="static" variant="outlined" color="transparent">
        <Toolbar>
          <IconButton onClick={goBack} color="inherit">
            <ArrowBack />
          </IconButton>
          <Typography variant="h5">The Relay Resource</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default BackBar
