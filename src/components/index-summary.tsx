import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import { PageProps, Link, graphql } from "gatsby"

const IndexSummary = ({ data }) =>(
  <>
    {data.allMarkdownRemark.group.sort((a, b) => b.totalCount - a.totalCount).map(({ tag, edges }) => (
      <article key={tag}>
        <h1 style={{
          fontSize: `1.3rem`,
          margin: `1.5rem 0 1rem`
        }}>{tag}</h1>
        <section style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `flex-start`
        }}>
          {edges.map(({ node }) => (
            <article key={node.frontmatter.slug}>
              <div style={{
                maxWidth: `210px`,
                margin: `0 0.5rem 0.25rem`
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
                      <GatsbyImage image={node.frontmatter.cover.childImageSharp.gatsbyImageData} style={{
                        borderRadius: `8px`,
                        verticalAlign: `bottom`
                      }} alt="" />
                    }
                  </figure>
                  <h2 style={{
                    color: `#000`,
                    fontSize: `0.9rem`,
                    lineHeight: `1.2rem`,
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
            </article>
          ))}
        </section>
      </article>
    ))}
  </>
)

IndexSummary.propTypes = {
  data: PropTypes.object,
}

IndexSummary.defaultProps = {
  data: {},
}

export default IndexSummary
