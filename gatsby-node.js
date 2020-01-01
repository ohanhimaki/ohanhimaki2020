const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise(resolve => {
    const oldPage = Object.assign({}, page)

    if (page.path !== oldPage.path) {
      deletePage(oldPage)
      createPage(page)
    }
    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("src/components/post.tsx")
  return new Promise((resolve, reject) => {
    graphql(`
      query MyQuery3 {
        __typename
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                date
                excert
                path
                tags
                title
              }
              html
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: template,
          context: { path: node.frontmatter.path },
        })
      })
      resolve()
    })
  })
}
