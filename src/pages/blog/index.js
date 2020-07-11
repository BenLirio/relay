import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Link } from 'gatsby'


const Index = ({ data }) => {
  const { edges: categories } = data.wordpress.categories
  console.log('categories', categories)
  return (<>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/blog-index.jpg')`,
      }}
    >
      <h1
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '1rem',
        }}
      >
        Latest Stories
          </h1>
    </div>
    <h1>Categories</h1>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', background: '#333333', padding: '10px' }}>{categories.map(({ node: category }) => {
      return <div key={category.id}>
        <Link style={{ color: '#eeeeee' }} to={category.uri}>{category.name}</Link>
      </div>
    })}</div>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </>
  )
}

export default Index



export const pageQuery = graphql`
  query PostPageTemplate {
    wordpress {
      categories {
        edges {
          node {
            name
            id
            uri
          }
        }
      }
    }
  }
`

