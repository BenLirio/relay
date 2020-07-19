import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Card, CardHeader, Grid, CardContent, Typography, Avatar, Button, CardActions } from '@material-ui/core'

class PersonData {
  constructor(node) {
    this.name = node.fullname || 'rando'
    this.team = node.team || ''
    this.position = node.position || null
    this.school = node.school
    this.instagram = node.instagram
  }
}
const Person = ({ node }) => {
  const person = new PersonData(node)
  return (
    <>
      <Card>
        <CardHeader avatar={
          <Avatar>{person.name[0]}</Avatar>
        } title={`${person.name}`} subheader={
          <>
            {person.school ? <Typography variant="body2">- {person.school}</Typography> : null}
            {person.position ? <Typography variant="body2">- {person.position}</Typography> : null}
            {person.team ? <Typography variant="body2">- {person.team}</Typography> : null}
          </>
        } />
        <CardContent>
          <Typography variant="body1"></Typography>
        </CardContent>
        <CardActions>
          <Button>Profile</Button>
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
              fullname
              position
              team
              school
            }
          }
        }
      }

    `
  )
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
