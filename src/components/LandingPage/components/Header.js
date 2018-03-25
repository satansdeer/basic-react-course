import React from 'react'
import Link from 'gatsby-link'

const headerStyle = {
  background: 'rgb(48,38,83)',
  background:
    'linear-gradient(63deg, rgba(48,38,83,1) 0%, rgba(62,38,119,1) 68%, rgba(74,33,148,1) 100%)',
  paddingTop: 65,
  paddingBottom: 85,
  paddingLeft: 15,
  paddingRight: 15,
  fontFamily: 'Open Sans',
  fontSize: 60,
  fontWeight: 'extra-bold',
  color: '#FFFFFF',
}

const h1style = {
  textAlign: 'center',
  lineHeight: 1.5,
}

const h2style = {
  textAlign: 'center',
  lineHeight: 1.5,
  marginBottom: 75,
}

const linkStyle = {
  fontSize: 25,
  background: 'rgb(233,167,0)',
  background:
    'linear-gradient(30deg, rgba(233,167,0,1) 0%, rgba(222,54,47,1) 100%)',
  color: '#fff',
  textDecoration: 'none',
  padding: 20,
  display: 'block',
  maxWidth: 350,
  margin: 'auto',
  marginBottom: 75,
  lineHeight: 1.5,
  textAlign: 'center',
  borderRadius: 6,
  boxShadow:
    '0 0 0 1px rgba(16,22,26,.1),0 4px 8px rgba(16,22,26,.2),0 18px 46px 6px rgba(16,22,26,.2)',
  textTransform: 'uppercase',
  fontFamily: 'Open Sans',
}

const mottoStyle = {
  fontSize: 26,
  maxWidth: 800,
  textAlign: 'center',
  margin: 'auto',
  lineHeight: 1.6,
  letterSpacing: 0.4,
}

const Header = () => (
  <div style={headerStyle}>
    <h1 style={h1style}>Basic React</h1>
    <h2 style={h2style}>Learn ReactJS in just a couple of days.</h2>
    <a style={linkStyle} href="/signup">
      Start learning now
    </a>
    <p style={mottoStyle}>
      Start building real ReactJS apps. Jump in with best practices, solid
      understanding and confidence.
    </p>
  </div>
)

export default Header
