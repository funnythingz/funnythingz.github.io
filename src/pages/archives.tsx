import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Visual from "./imgs/archives_image.jpg"

const Archives: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="原付改造ブログ" />
    <h1>原付改造ブログ</h1>
    <img src={Visual} />
    <p>ライブディオ/ライブディオZX/スーパーディオを改造カスタムする日々の記録</p>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.frontmatter.slug}>
        {node.frontmatter.cover &&
          <Image
            fixed={node.frontmatter.cover.childImageSharp.fixed}
          />
        }
        <h2>
          <Link to={node.frontmatter.slug}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </Layout>
)

export default Archives

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            slug
            cover {
              childImageSharp {
                fixed(width: 320, height: 240) {
                  ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 320, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
