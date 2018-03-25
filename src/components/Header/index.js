import React from 'react'
import Link from 'gatsby-link'
import logo from './logo.png'

const Header = () => (
  <div
    style={{
      background: 'rgb(48,38,83)',
      background:
        'linear-gradient(63deg, rgba(48,38,83,1) 0%, rgba(62,38,119,1) 68%, rgba(74,33,148,1) 100%)',
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '100%',
      zIndex: 11,
    }}
  >
    <div
      style={{
        marginLeft: 0,
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
