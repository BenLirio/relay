import React from "react"
import { Link } from "gatsby"

const CategoryPosts = ({ allWordpressPost }) => {
  console.log("allWordpressPost", allWordpressPost)
  return (
    <div>
      {allWordpressPost.edges.map(({ node }) => {
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
