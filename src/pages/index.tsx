import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import "./styles.scss"

import Banner from "../components/banner"
import MtsBanner from "../components/mts-banner"
import Commithistory from "../components/commit-history"

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
    <Banner></Banner>
    <div className="max-w-xl m-auto p-8">
      <h1 className="">Etusivu</h1>
      <p className="">
        Olen IT-Tradenomi Olli ja tykkään frisbeegolfata, säbäillä ja värkkäillä
        tietokoneella.
      </p>
      <p>LinkedIN ja GitHub linkit alalaidassa.</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name="gatsby-astronaut.png" />
    </div> */}
    </div>
    <MtsBanner></MtsBanner>
    <Commithistory></Commithistory>
  </Layout>
)

export default IndexPage
