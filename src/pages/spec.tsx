import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Visual from "./imgs/spec.jpg"
import IndexSummary from "../components/index-summary"

const Spec: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造インプレッション" visual={Visual} />
    <h1 className="pageTitle">原付改造インプレッション</h1>
    <div style={{
      textAlign: `center`,
    }}>
      <img src={Visual} />
    </div>
    <p>ひろZX/とだディオ/ひろディオの改造スペックです</p>
    <IndexSummary data={data} />
  </Layout>
)

export default Spec

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [
        "改造インプレッション",
      ]}}}
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY年M月D日")
              cover {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 210, height: 120)
                }
              }
            }
          }
        },
        totalCount
      }
    }
  }
`
