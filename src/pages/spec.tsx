import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Spec: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造インプレッション" />
    <h1>原付改造インプレッション</h1>
  </Layout>
)

export default Spec
