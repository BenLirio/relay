import React from 'react'
import { Grid, ButtonBase } from '@material-ui/core'
import { navigate } from 'gatsby'

const IconCta = ({ children, to }) => {
  const handleClick = () => {
    navigate(`${to}`)
  }
  return (
    <Grid component={ButtonBase} onClick={handleClick} item xs={12} sm>
      {children}
    </Grid>
  )
}

export default IconCta
