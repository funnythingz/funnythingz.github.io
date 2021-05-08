import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RandomVisual from "../components/functions/random-visual"

const IndexPage = () => (
  <Layout>
    <SEO title="原付改造" />
    <h1>Hi gentsuki kids!</h1>
    <p>
      Welcome to Making Machinez.
      This site is so funny diary site.
    </p>
    <div style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}>
      <Link to="/archives">
        <img src={ RandomVisual() } alt="" width="90%" />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
