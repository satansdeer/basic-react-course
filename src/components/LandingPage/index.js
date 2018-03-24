import React from 'react'
import Link from 'gatsby-link'
import { Header, AboutTheCourse, AboutTheAuthor } from './components'

const LandingPage = () => (
  <div>
    <Header />
    <AboutTheCourse />
    <AboutTheAuthor />
    <Link to="/lessons/">Lessons</Link>
  </div>
)

export default LandingPage
