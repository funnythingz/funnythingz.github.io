import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />
}

export default Image
