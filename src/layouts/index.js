import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
//import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
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
        {this.props.location.pathname == '/' ? (
          <div>{children()}</div>
        ) : (
          <div>
            <Header />
            <Navigation {...this.props} />
            <div
              style={{
                paddingTop: 160,
                paddingLeft: 280,
              }}
            >
              {children()}
            </div>
          </div>
        )}
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
