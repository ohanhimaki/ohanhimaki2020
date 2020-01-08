import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "./styles.scss"

import Banner from "../components/banner"
import MtsBanner from "../components/mts-banner"
import Commithistory from "../components/commit-history"
import UserEvents from "../components/usergithubEvents"
import Tabs from "../components/tabs"

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
    </div>
    <MtsBanner></MtsBanner>
    <div className="bg-gray-800 max-w-xl  m-auto p-5 rounded-lg my-4 child-rounded height-smooth">
      <Tabs>
        <div label="Commit History of this repo">
          {" "}
          <Commithistory
            className="child-rounded"
            repo="ohanhimaki/ohanhimaki2020"
          ></Commithistory>
        </div>
        <div label="My github events">
          {" "}
          <UserEvents></UserEvents>
        </div>
      </Tabs>
    </div>
  </Layout>
)

export default IndexPage
