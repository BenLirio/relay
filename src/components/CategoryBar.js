import React from "react"
import { Toolbar, Button, AppBar, Grid, Typography, ButtonBase } from "@material-ui/core"
import { Link } from 'gatsby-theme-material-ui'
import { useStaticQuery, graphql } from "gatsby"

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


const Category = (category) => {

  return (
    <Grid item>
      <ButtonBase>
        <Typography variant="subtitle1">
          <Link color="textPrimary" to={category.uri}>{category.name}</Link>
        </Typography>
      </ButtonBase>
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
        uri
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
      {categories.map((category) => {
        return <Category key={category.id} {...category} />
      })}
    </Grid>
  )
}

export default CategoryBar
