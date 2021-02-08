import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi gentsuki kids!</h1>
    <p>Welcome to Making Machinez.</p>
    <p>This site is so funny diary site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="/svg/zx.svg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
