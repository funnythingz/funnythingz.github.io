import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Logo = ({ title }) => (
  <h1 className="heading">
    <Link to="/" className="heading-link">
      <span className="heading-title">
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
