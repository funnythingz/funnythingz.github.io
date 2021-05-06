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
    {data.allMarkdownRemark.group.map(({ tag, totalCount, edges }) => (
      <article key={tag}>
        <h1>{tag} <sub>{totalCount}件</sub></h1>
        {edges.map(({ node }) => (
          <section key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>
              <figure>
                {node.frontmatter.cover &&
                  <Image fixed={node.frontmatter.cover.childImageSharp.fixed} />
                }
              </figure>
              <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
              <h2>
                {node.frontmatter.title}
              </h2>
            </Link>
          </section>
        ))}
      </article>
    ))}
  </Layout>
)

export default Archives

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY年M月-D日")
              cover {
                childImageSharp {
                  fixed(width: 320, height: 240) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
