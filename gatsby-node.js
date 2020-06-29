const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wordpress {
        posts {
          nodes {
            slug
            title
            content
          }
        }
      }
    }
  `).then(result => {
    result.data.wordpress.posts.nodes.forEach(({ slug, title, content }) => {
      console.log("title from node", title)
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          title,
          slug,
          content,
        },
      })
    })
  })
}
