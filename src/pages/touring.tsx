import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexSummary from "../components/index-summary"

const Touring: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="ツーリングレポート" />
    <h1 className="pageTitle">ツーリングレポート</h1>
    <p>楽しいツーリングの思い出です</p>
    <IndexSummary data={data} />
  </Layout>
)

export default Touring

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {
        in: [
          "ツーリングレポート"
        ]
      }}}
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
