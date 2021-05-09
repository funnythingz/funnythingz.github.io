import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RandomVisual from "../components/functions/random-visual"
import IndexSummary from "../components/index-summary"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => (
  <Layout>
    <SEO title="原付改造" />
    <h1 className="pageTitle">Hi gentsuki kids!</h1>
    <p>
      Welcome to Making Machinez.
      This is so funny diary site.
    </p>
    <div style={{
      maxWidth: `100%`,
      marginBottom: `1.45rem`,
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
