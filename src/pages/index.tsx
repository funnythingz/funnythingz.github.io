import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Zx1SVG from "../images/zx_1.svg"
import Zx2SVG from "../images/zx_2.svg"
import Zx3SVG from "../images/zx_3.svg"
import Zx4SVG from "../images/zx_4.svg"
import Zx5SVG from "../images/zx_5.svg"
import Zx6SVG from "../images/zx_6.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="原付改造" />
    <h1>Hi gentsuki kids!</h1>
    <p>Welcome to Making Machinez.</p>
    <p>This site is so funny diary site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={ Zx1SVG } alt="" />
    </div>
    <ul>
      <li><Link to="/archives">原付改造ブログ</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
