import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Card, CardHeader, Grid, CardContent, Typography, Avatar, CardActionArea, Button, CardActions } from '@material-ui/core'

const Person = ({ node }) => {
  console.log('node', node)
  return (
    <>
      <Card>
        <CardHeader avatar={
          <Avatar>{node.first[0]}</Avatar>
        } title={`${node.first} ${node.last}`} subheader={"ROLE"} />
        <CardContent>
          <Typography variant="body1">short description about the persion here. This is going to be about a couple sentences</Typography>
        </CardContent>
        <CardActions>
          <Button>profile</Button>
        </CardActions>
      </Card>
    </>
  )
}

const People = () => {
  const { allGoogleSheetPeopleRow: people } = useStaticQuery(
    graphql`
      query GetPeople {
        allGoogleSheetPeopleRow {
          edges {
            node {
              id
              email
              first
            }
          }
        }
      }

    `
  )
  console.log('people', people)
  return (
    <>
      People - Data from <a href="https://docs.google.com/spreadsheets/d/1ZarUDaXOGxN6cedlX2mLl6lbF_uGxKMnO4OXisLpM8s/edit?usp=sharing">Google Sheets</a>
      {' '}Request acces to edit
      <Grid container spacing={3}>
        {people.edges.map(({ node }) => {
          return (
            <Grid item xs={4}>
              <Person key={node.id} node={node}></Person>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default People
