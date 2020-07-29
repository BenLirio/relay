import React, { useState } from "react"
import { Toolbar, Button, AppBar, Grid, Typography, ButtonBase, Hidden, Menu, MenuItem } from "@material-ui/core"
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
  const [anchorEl, setAnchorEl] = useState(null)
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
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  return (
    <Grid container justify={"space-evenly"}>
      <Hidden smDown>
        {categories.map((category) => {
          return (
            <>
              <Category key={category.id} {...category} />
            </>
          )
        })}
      </Hidden>
      <Hidden mdUp>
        <Button>About</Button>
        <Button onClick={handleClick}>Categories</Button>
        <Button>How to Help</Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((category) => {
            return (
              <>
                <MenuItem component={Link} color="textPrimary" to={category.uri} key={category.id}>{category.name}</MenuItem>
              </>
            )
          })}
        </Menu>
      </Hidden>
    </Grid>
  )
}

export default CategoryBar
