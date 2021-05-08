import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../../images/favicon.png"

const styles = {
  heading: {
    margin: `0 0 0.7rem`,
    padding: 0,
    lineHeight: `36px`,
    fontSize: `1.5rem`,
  },
  icon: {
    verticalAlign: `middle`,
    width: `36px`,
    height: `36px`,
    marginBottom: 0
  },
  title: {
    marginLeft: `5px`,
    marginTop: `5px`,
    display: `inline-block`,
  },
  link: {
    textDecoration: `none`,
    color: `#fff`,
  }
}
const Logo = ({ title }) => (
  <h1 style={styles.heading}>
    <Link to="/" style={styles.link}>
      <img src={Icon} style={styles.icon} />
      <span style={styles.title}>
        {title}
      </span>
    </Link>
  </h1>
)

Logo.propTypes = {
  title: PropTypes.string,
}

Logo.defaultProps = {
  title: ``,
}

export default Logo
