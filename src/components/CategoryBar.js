import React from "react"
import { Toolbar, Button, AppBar } from "@material-ui/core"
import { Link, useStaticQuery } from "gatsby"

const IGNORED_CATEGORIES = ["Uncategorized", "Caregiving", "Tested Positive"]

const CategoryBar = () => {
  const { allWordpressCategory } = useStaticQuery(graphql`
  query CategoryBarQuery {
    allWordpressCategory {
      edges {
        node {
          name
          id
          path
        }
      }
    }
  }
  `)
  const { edges } = allWordpressCategory
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
              to={node.path}
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
