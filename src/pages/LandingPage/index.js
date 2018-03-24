import React from 'react'
import Link from 'gatsby-link'
import { Header } from './components'

const LandingPage = () => (
  <div>
    <Header />
    <p>Now go build something great.</p>
    <Link to="/lessons/">Lessons</Link>
  </div>
)

export default LandingPage
