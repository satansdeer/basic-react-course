import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.container}>
    <div
      style={{
        marginLeft: 0,
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <h1 className={styles.header}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Basic React Course
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
