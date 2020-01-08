import React from "react"
import { Link } from "gatsby"

import Layout from "../shared/layout"
import SEO from "../shared/seo"
// import "./styles.scss"

import Banner from "../shared/banner"
import MtsBanner from "../shared/mts-banner"
import Commithistory from "../commit-history/commit-history"
import UserEvents from "../usergithubEvents/usergithubEvents"
import Tabs from "../shared/tabs"

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
    <div className="bg-gray-800 max-w-xl  m-auto p-5 rounded-lg my-4 child-rounded-bot ">
      <Tabs>
        <div label="My github events">
          {" "}
          <UserEvents></UserEvents>
        </div>
        <div label="Commit History of this repo">
          {" "}
          <Commithistory
            className="child-rounded-bot"
            repo="ohanhimaki/ohanhimaki2020"
          ></Commithistory>
        </div>
      </Tabs>
    </div>
  </Layout>
)

export default IndexPage
