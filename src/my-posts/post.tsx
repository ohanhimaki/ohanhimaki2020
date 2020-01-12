import React from "react"

import "../../tailwindcss/tailwind.src.css"
import Layout from "../shared/layout"
import SEO from "../shared/seo"
import { useStaticQuery, graphql } from "gatsby"
import Commithistory from "../commit-history/commit-history"

// Generated by https://quicktype.io

export interface Data {
  data: DataClass
}

export interface DataClass {
  __typename: string
  markdownRemark: MarkdownRemark
}

export interface MarkdownRemark {
  id: string
  html: string
  timeToRead: number
  frontmatter: Frontmatter
}

export interface Frontmatter {
  date: string
  excert: string
  path: string
  tags: string[]
  title: string
  repo?: string
}
const PostPage = ({ data }: Data) => {
  const { frontmatter, html } = data.markdownRemark
  const date = new Date(frontmatter.date)
  const formattedDate =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()

  console.log(formattedDate)

  function repo() {
    if (frontmatter.repo != null) {
      const link = "https://github.com/" + frontmatter.repo

      return (
        <div className="bg-gray-800 max-w-4xl m-auto p-5 rounded-lg my-4">
          <a href={link} target="__blank">
            <h3 className="pb-5 pl-5">{frontmatter.repo}</h3>
          </a>
          <Commithistory
            repo={frontmatter.repo}
            className="child-rounded-bot child-rounded-top"
          ></Commithistory>
        </div>
      )
    }
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="max-w-4xl m-auto bg-gray-800 p-5 rounded-lg">
        <h4>{formattedDate}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {repo()}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    __typename
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date
        tags
        path
        excert
        repo
      }
    }
  }
`

export default PostPage
