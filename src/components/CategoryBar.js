import React from 'react'
import { Toolbar, Button } from '@material-ui/core'
import { Link } from 'gatsby'

const CategoryBar = ({ categories }) => {
  const { edges } = categories
  return (
    <Toolbar>
      {edges.map(({ node }) => {
        return <Button key={node.id} component={Link} to={node.uri}>{node.name}</Button>
      })}
    </Toolbar>
  )
}

export default CategoryBar
