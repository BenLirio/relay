import React from 'react'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

const Person = ({ id, email, first }) => {
  return <div key={id}>
    {email} - {first}
  </div>
}

const People = (props) => {
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
    <div>
      People - Data from <a href="https://docs.google.com/spreadsheets/d/1ZarUDaXOGxN6cedlX2mLl6lbF_uGxKMnO4OXisLpM8s/edit?usp=sharing">Google Sheets</a>
      {' '}Request acces to edit
      {people.edges.map(({ node: person }) => {
        return <Person {...person}></Person>
      })}
    </div>
  )
}

export default People
