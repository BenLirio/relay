import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const tipsAndAdvice = ({ data }) => {
  const posts = data.wordpress.posts.nodes

  return (
    <Layout>
      Tips and Advice
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Link to={`/${post.slug}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default tipsAndAdvice
export const query = graphql`
  query MyQuery {
    wordpress {
      posts {
        nodes {
          title
          id
          slug
        }
      }
    }
  }
`
