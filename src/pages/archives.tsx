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
    {data.allMarkdownRemark.group.map(({ tag, edges }) => (
      <article key={tag}>
        <h1 style={{
          fontSize: `1.3rem`
        }}>{tag}</h1>
        {edges.map(({ node }) => (
          <section key={node.frontmatter.slug}>
            <div style={{
              maxWidth: `320px`,
            }}>
              <Link to={node.frontmatter.slug} style={{
                display: `inline-block`,
                textDecoration: `none`,
                margin: `0 0 1rem`
              }}>
                <figure style={{
                  margin: `0 0 0.5rem`
                }}>
                  {node.frontmatter.cover &&
                    <Image fixed={node.frontmatter.cover.childImageSharp.fixed} style={{
                      borderRadius: `8px`,
                      verticalAlign: `bottom`
                    }} />
                  }
                </figure>
                <h2 style={{
                  color: `#000`,
                  fontSize: `1rem`,
                  lineHeight: `1.1rem`,
                  margin: 0,
                }}>
                  {node.frontmatter.title}
                </h2>
                <time dateTime={node.frontmatter.date} style={{
                  fontSize: `0.7rem`,
                  color: `#666`,
                }}>{node.frontmatter.date}</time>
              </Link>
            </div>
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
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY年M月D日")
              cover {
                childImageSharp {
                  fixed(width: 320, height: 200) {
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
