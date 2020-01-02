import React from "react"

import "../../tailwindcss/tailwind.src.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import PostPreview, { Post } from "../components/post-preview"

interface Props {
  data?: any
}

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    {
      __typename
      allMarkdownRemark(
        filter: {}
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
              excert
              path
            }
          }
        }
      }
    }
  `)
  const postPreviews = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Posts" />
      <div className="flex flex-wrap max-w-4xl m-auto">
        {postPreviews.map((value: Post, index: any) => {
          return <PostPreview post={value} key={index}></PostPreview>
        })}
      </div>
    </Layout>
  )
}

export default PostsPage
