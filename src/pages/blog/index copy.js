import React from 'react'
import { Button } from '@material-ui/core'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Link } from 'gatsby'
import CategoryBar from '../../components/CategoryBar'


const Index = ({ data }) => {
  return (
    <>
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
      <CategoryBar categories={data.wordpress.categories} />
      <Button>test</Button>
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
  query PostPageTemplateCopy {
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

