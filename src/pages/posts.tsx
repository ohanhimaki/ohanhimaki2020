import React from "react"

import "../../tailwindcss/tailwind.src.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import PostPreview, { Post } from "../components/post-preview"

interface Props {
  data?: any
}

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    {
      __typename
      allMarkdownRemark(filter: {}) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
              excert
            }
          }
        }
      }
    }
  `)
  console.log(data)
  // return <pre>{JSON.stringify(data, null, 4)}</pre>

  // const { markdownRemark } = data
  // const { frontmatter, html } = markdownRemark
  const postPreviews = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Posts" />
      <div>
        {postPreviews.map((value: Post, index: any) => {
          return <PostPreview post={value}></PostPreview>
        })}
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `

export default PostsPage
