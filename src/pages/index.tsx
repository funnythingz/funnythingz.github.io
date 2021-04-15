import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="原付改造" />
    <h1>Hi gentsuki kids!</h1>
    <p>Welcome to Making Machinez.</p>
    <p>This site is so funny diary site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="/svg/zx.svg" />
    </div>
    <ul>
      <li><Link to="/archives">原付改造ブログ</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/using-typescript">Go to "Using TypeScript"</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
