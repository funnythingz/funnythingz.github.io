import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Visual from "./imgs/mini4wd.jpg"
import IndexSummary from "../components/index-summary"

const Mini4wd: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="ミニ四駆" />
    <h1>ミニ四駆</h1>
    <img src={Visual} />
    <p>とあるミニ四駆初心者のミニ四駆沼の記録日記</p>
    <IndexSummary data={data} />
  </Layout>
)

export default Mini4wd

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {
        in: [
          "ミニ四駆",
        ],
        nin: [
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
