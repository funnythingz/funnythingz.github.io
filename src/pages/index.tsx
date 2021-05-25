import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RandomVisual from "../components/functions/random-visual"
import IndexSummary from "../components/index-summary"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="HOME" visual={RandomVisual()} />
    <h1 className="pageTitle">Hello! funnythingz world!</h1>
    <p>
      This site making for funny people! because I'm funnythingz!
    </p>
    <div style={{
      textAlign: `center`,
    }}>
      <img src={ RandomVisual() } alt="" width="90%" />
    </div>
    <IndexSummary data={data} />
  </Layout>
)

export default IndexPage

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
