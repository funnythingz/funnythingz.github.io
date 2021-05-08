import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const styles = {
  list: {
    listStyle: `none`,
    margin: 0,
    padding: 0,
    display: `inline-block`,
    verticalAlign: `bottom`,
    fontWeight: `bold`
  },
  link: {
    color: `#fff`,
    display: `inline-block`,
    verticalAlign: `bottom`,
    padding: `0.5rem 1rem`,
    textDecoration: `none`,
    borderBottom: `solid 3px transparent`
  },
  active: {
    color: `#fff`,
    display: `inline-block`,
    verticalAlign: `bottom`,
    padding: `0.5rem 1rem`,
    textDecoration: `none`,
    borderBottom: `solid 3px #d50`
  }
}

const Menu = () => (
  <ul style={{
    margin: 0, padding: 0,
  }}>
    <li style={styles.list}>
      <Link to="/archives" style={styles.link, styles.active}>
        原付改造
      </Link>
    </li>
    <li style={styles.list}>
      <Link to="/spec" style={styles.link}>
        改造インプレ
      </Link>
    </li>
    <li style={styles.list}>
      <Link to="/mini4wd" style={styles.link}>
        ミニ四駆
      </Link>
    </li>
    <li style={styles.list}>
      <Link to="/about" style={styles.link}>
        あばうつ
      </Link>
    </li>
  </ul>
)

export default Menu
