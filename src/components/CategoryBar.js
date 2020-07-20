import React from 'react'
import { Toolbar, Button, AppBar } from '@material-ui/core'
import { Link, useStaticQuery, graphql } from 'gatsby'

const IGNORED_CATEGORIES = ['Uncategorized', 'Caregiving', 'Tested Positive']

const CategoryBar = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query CategoryBarQuery {
      allWpCategory {
        edges {
          node {
            name
            id
            uri
          }
        }
      }
    }
  `)
  const { edges } = allWpCategory
  const filteredEdges = [...edges].filter(
    ({ node }) => !IGNORED_CATEGORIES.includes(node.name)
  )
  return (
    <AppBar position="static">
      <Toolbar>
        {filteredEdges.map(({ node }) => {
          return (
            <Button
              color="inherit"
              key={node.id}
              component={Link}
              to={node.uri}
            >
              {node.name}
            </Button>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

export default CategoryBar
