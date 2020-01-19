/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactChild } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../tailwindcss/tailwind.src.css"

import "./layout.css"
import "./hidden.css"
import Header from "./header"
import Footer from "./footer"
import Watermark from "./watermark"

interface Props {
  location?: Location
  title?: string
  children?: ReactChild[]
}

const Layout = ({ location, title, children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="m-auto page-container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">
          <main>{children}</main>
          <Watermark></Watermark>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
