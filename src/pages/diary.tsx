import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexSummary from "../components/index-summary"

const SuperThomas: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Diary" />
    <h1 className="pageTitle">Diary</h1>
    <p>てきとうな記録です</p>
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
          "diary"
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
                  gatsbyImageData(layout: FIXED, width: 320, height: 240)
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
