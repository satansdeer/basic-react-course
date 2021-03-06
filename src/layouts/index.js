import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Navigation from '../components/Navigation'
import styles from './layout.module.css'
import 'prismjs/themes/prism-okaidia.css'

import withAuthentication from '../components/Session/withAuthentication'

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props

    const { pathname } = this.props.location

    return (
      <div>
        <Helmet
          title="Basic React Course"
          meta={[
            { name: 'description', content: 'Basic React Course' },
            { name: 'keywords', content: 'react, javascript' },
          ]}
        />
        {pathname == '/' ? (
          <div>{children()}</div>
        ) : (
          <div>
            <Header />
            <div className={styles.container}>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/iyG9_UFJVoI"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
              </div>
              {children()}
            </div>
            {pathname.includes('lessons') && <Navigation {...this.props} />}
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
