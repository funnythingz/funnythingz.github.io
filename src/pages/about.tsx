import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="About" />
    <h1 className="pageTitle">Hello! funnythingz world!</h1>
    <p>
      This site making for funny people! because I'm funnythingz!
    </p>
  </Layout>
)

export default About
