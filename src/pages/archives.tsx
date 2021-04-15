import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Archives: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造ブログ" />
    <h1>原付改造ブログ</h1>
    <p>ライブディオ/ライブディオZX/スーパーディオを改造カスタムする日々の記録</p>
  </Layout>
)

export default Archives
