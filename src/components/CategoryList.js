import React from 'react'
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import { useStaticQuery, graphql, Link } from 'gatsby'

const CategoryList = () => {

  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        nodes {
          id
          name
          uri
        }
      }
    }
  `)
  return (
    <List subheader={
      <ListSubheader>
        Categories
      </ListSubheader>
    }>
      {allWpCategory.nodes.map((node) => {
        return (
          <ListItem component={Link} to={node.uri} key={node.id} button>
            <ListItemText primary={node.name} />
          </ListItem>
        )
      })}
      <ListItem button>
        <ListItemText primary="Item" />
      </ListItem>
    </List>
  )
}

export default CategoryList
