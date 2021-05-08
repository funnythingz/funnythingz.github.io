import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mini4wd: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="ミニ四駆" />
    <h1>ミニ四駆</h1>
  </Layout>
)

export default Mini4wd
