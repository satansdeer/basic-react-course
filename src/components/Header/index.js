import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.container}>
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
)

export default Header
