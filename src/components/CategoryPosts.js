import React from 'react'
import { Link } from 'gatsby'

const CategoryPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => {
        return <div key={post.id}>
          <Link to={post.uri}>{post.title}</Link></div>
      })}
    </div>
  )
}

export default CategoryPosts
