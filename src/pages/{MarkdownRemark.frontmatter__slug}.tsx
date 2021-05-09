import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, id } = markdownRemark
  const thisPageContext = allMarkdownRemark.edges.map((data) => (data.node.id === id ? data : null)).filter((e) => e)[0]
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <article className="blog-post-container">
        <div className="blog-post">
          <time dateTime={frontmatter.date} style={{
            fontSize: `1rem`,
            color: `#666`,
          }}>{frontmatter.date}</time>
          <h1 className="pageTitle">{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>
      <ul className="pager">
        <li className="pager-prev">
          {thisPageContext.previous &&
            <Link to={thisPageContext.previous.frontmatter.slug}>
              <span>&lt;&lt;&nbsp;</span>
              {thisPageContext.previous.frontmatter.title}
            </Link>
          }
        </li>
        <li className="pager-next">
          {thisPageContext.next &&
            <Link to={thisPageContext.next.frontmatter.slug}>
              {thisPageContext.next.frontmatter.title}
              <span>&nbsp;&gt;&gt;</span>
            </Link>
          }
        </li>
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY年M月D日")
        title
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY年M月D日")
            slug
          }
        }
        next {
          frontmatter {
            slug
            date(formatString: "YYYY年M月D日")
            title
          }
        }
        previous {
          frontmatter {
            slug
            date(formatString: "YYYY年M月D日")
            title
          }
        }
      }
    }
  }
`
