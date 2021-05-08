import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexSummary from "../components/index-summary"

const SuperThomas: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="プラレール・スーパートーマス" />
    <h1 className="pageTitle">プラレール・スーパートーマス</h1>
    <p>プラレールトーマスを改造して爆速なスーパートーマスを作る記録日記</p>
    <IndexSummary data={data} />
  </Layout>
)

export default SuperThomas

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {
        in: [
          "プラレール・スーパートーマス"
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
