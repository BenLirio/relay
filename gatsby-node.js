const _ = require('lodash')
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWpPost(limit: 50) {
        edges {
          node {
            id
            uri
          }
        }
      }
      allWpCategory {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const { allWpPost } = result.data
    const { allWpCategory } = result.data

    allWpPost.edges.forEach(({ node }) => {
      createPage({
        path: node.uri,
        component: path.resolve(`src/templates/wordpress-post.js`),
        context: {
          id: node.id,
        },
      })
    })

    allWpCategory.edges.forEach(({ node }) => {
      createPage({
        path: node.uri,
        component: path.resolve(`src/templates/wordpress-category.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
