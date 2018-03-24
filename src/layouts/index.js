import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

import withAuthentication from '../components/Session/withAuthentication'

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Helmet
          title="Basic React Course"
          meta={[
            { name: 'description', content: 'Basic React Course' },
            { name: 'keywords', content: 'react, javascript' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
