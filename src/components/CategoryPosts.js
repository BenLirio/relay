import React from "react"
import { Link } from "gatsby"

const CategoryPosts = ({ allWpPost }) => {
  return (
    <div>
      {allWpPost.edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <Link to={node.uri}>{node.title}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryPosts
