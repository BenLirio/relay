import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'

const Footer = class extends React.Component {
  render() {
    return (
      <Box style={{ background: '#333333' }}>
        <Container fixed>
          <Typography variant="h1" color="primary">Footer</Typography>
        </Container>
      </Box>
    )
  }
}

export default Footer
