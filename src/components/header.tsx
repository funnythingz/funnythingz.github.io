import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from './header/logo'
import Menu from './header/menu'

const styles = {
  header: {
    background: `#538CF5`,
    marginBottom: `1.5rem`,
  },
  container: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0.5rem`,
  },
}
const Header = ({ siteTitle }) => (
  <header
    style={styles.header}
  >
    <div
      style={styles.container}
    >
      <Logo title={siteTitle} />
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
