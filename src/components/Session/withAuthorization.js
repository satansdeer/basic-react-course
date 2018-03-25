import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { firebase } from '../../firebase'
import * as routes from '../../constants/routes'

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    state = { authUser: null }
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser && this.setState(() => ({ authUser }))
        if (!condition(authUser)) {
          this.props.history.push(routes.SIGN_IN)
        }
      })
    }

    render() {
      return this.state.authUser ? (
        <Component authUser={this.state.authUser} {...this.props} />
      ) : null
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object,
  }

  return withRouter(WithAuthorization)
}

export default withAuthorization
