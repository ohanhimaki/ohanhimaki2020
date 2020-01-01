import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./styles.scss"

import "../../tailwindcss/tailwind.src.css"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-gray-300">Hi people</h1>
    <h1 className="text-md font-bold">Hi people</h1>
    <p className="text-lg">Welcome to your new Gatsby site.</p>
    <p className="text-sm">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
