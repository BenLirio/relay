const _ = require("lodash")
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPost(limit: 6) {
        edges {
          node {
            id
            path
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            path
            wordpress_id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { allWordpressPost } = result.data
    const { allWordpressCategory } = result.data

    allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve(`src/templates/wordpress-post.js`),
        context: {
          id: node.id,
        },
      })
    })

    allWordpressCategory.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve(`src/templates/wordpress-category.js`),
        context: {
          id: node.id,
          wordpress_id: node.wordpress_id,
        },
      })
    })
  })
}
