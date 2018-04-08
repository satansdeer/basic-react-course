import React from 'react'
import Link from 'gatsby-link'
import { Header, AboutTheCourse, AboutTheAuthor } from './components'

const LandingPage = () => (
  <div>
    <Header />
    <div style={{ padding: '0 15px' }}>
      <AboutTheCourse />
      <AboutTheAuthor />
    </div>
  </div>
)

export default LandingPage
