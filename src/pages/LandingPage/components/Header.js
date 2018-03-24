import React from 'react'
import Link from 'gatsby-link'

const headerStyle = {
  background: 'rgb(48,38,83)',
  background:
    'linear-gradient(63deg, rgba(48,38,83,1) 0%, rgba(62,38,119,1) 68%, rgba(74,33,148,1) 100%)',
  paddingTop: 65,
  paddingBottom: 85,
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
  width: 300,
  margin: 'auto',
  textAlign: 'center',
  borderRadius: 6,
}

const Header = () => (
  <div style={headerStyle}>
    <h1 style={h1style}>Basic React</h1>
    <h2 style={h2style}>Learn react.js in just a couple of days.</h2>
    <a style={linkStyle} href="/signup">
      Start learning now
    </a>
  </div>
)

export default Header
