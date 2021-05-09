import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
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
  </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY年M月D日")
        title
      }
    }
  }
`
