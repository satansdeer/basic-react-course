import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'

const Header = () => (
  <div
    style={{
      background: '#171e27',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          display: 'inline-block',
          height: 80,
          verticalAlign: 'middle',
          margin: '0 15px 0 0',
        }}
      />
      <h1
        style={{ margin: 0, display: 'inline-block', verticalAlign: 'middle' }}
      >
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
