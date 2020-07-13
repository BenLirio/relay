import React from 'react'
import { Toolbar, Button, AppBar } from '@material-ui/core'
import { Link } from 'gatsby'

const IGNORED_CATEGORIES = ['Uncategorized', 'Caregiving', 'Tested Positive']

const CategoryBar = ({ categories }) => {
  const { edges } = categories
  const filteredEdges = [...edges].filter(({ node }) => !IGNORED_CATEGORIES.includes(node.name))
  return (
    <AppBar position="static">
      <Toolbar>
        {filteredEdges.map(({ node }) => {
          return <Button color="inherit" key={node.id} component={Link} to={node.uri}>{node.name}</Button>
        })}
      </Toolbar>
    </AppBar>
  )
}

export default CategoryBar
