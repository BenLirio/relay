import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import PageContextProvider from "../context/PageContext"

const tipsAndAdvice = props => {
  const posts = props.data.wordpress.posts.nodes

  return (
    <PageContextProvider {...props}>
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
    </PageContextProvider>
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
