import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Visual from "./imgs/archives_image.jpg"
import IndexSummary from "../components/index-summary"

const Archives: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造ブログ" />
    <h1>原付改造ブログ</h1>
    <img src={Visual} />
    <p>ライブディオ/ライブディオZX/スーパーディオを改造カスタムする日々の記録</p>
    <IndexSummary data={data} />
  </Layout>
)

export default Archives

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
                  fixed(width: 210, height: 120) {
                    ...GatsbyImageSharpFixed
                  }
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
