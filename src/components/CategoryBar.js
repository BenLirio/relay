import React from "react"
import { Toolbar, Button, AppBar, Grid, Typography } from "@material-ui/core"
import { Link, useStaticQuery, graphql } from "gatsby"

const names = new Map()
names.set('dGVybToxMDE2', 'Caregiving')
names.set('dGVybTo2ODA=', 'Editors Pick')
names.set('dGVybToxNw==', 'Hospital')
names.set('dGVybToxMDMy', 'Interviews')
names.set('dGVybToxNg==', 'Coping')
names.set('dGVybToz', 'Reliable Sources')
names.set('dGVybToxMDE3', 'Narratives')
names.set('dGVybToxOA==', 'Tested Positive')
names.set('dGVybToxOQ==', 'Advice')


const Category = ({ id, name }) => {
  return (
    <Grid item>
      <Button>{name}</Button>
    </Grid>
  )
}

const CategoryBar = () => {
  const { allWpCategory } = useStaticQuery(graphql`
  query CategoryBarQuery {
    allWpCategory {
      nodes {
        id
        name
      }
    }
  }
  `)
  const categories = allWpCategory.nodes.map(node => {
    const name = names.get(node.id) || null
    return {
      ...node,
      name
    }
  }).filter(({ name }) => !!name)
  return (
    <Grid container justify={"space-evenly"}>
      {categories.map(({ id, name }) => {
        return <Category key={id} name={name} />
      })}
    </Grid>
  )
}

export default CategoryBar
