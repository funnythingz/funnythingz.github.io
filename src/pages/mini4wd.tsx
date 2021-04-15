import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mini4wd: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造ブログ" />
    <h1>原付改造ブログ</h1>
  </Layout>
)

export default Mini4wd
