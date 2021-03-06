import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { auth, db, firebase } from '../../firebase'
import * as routes from '../../constants/routes'

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
})

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser && this.props.history.push(routes.LESSONS)
    })
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state

    const { history } = this.props

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db
          .doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }))
            history.push(routes.HOME)
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error))
          })
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error))
      })

    event.preventDefault()
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName('username', event.target.value))
          }
          type="text"
          placeholder="Full Name"
          style={{ display: 'block', marginBottom: 15, paddingLeft: 10 }}
        />
        <input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
          style={{ display: 'block', marginBottom: 15, paddingLeft: 10 }}
        />
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordOne', event.target.value)
            )
          }
          type="password"
          placeholder="Password"
          style={{ display: 'block', marginBottom: 15, paddingLeft: 10 }}
        />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName('passwordTwo', event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
          style={{ display: 'block', marginBottom: 15, paddingLeft: 10 }}
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
)

export default withRouter(SignUpForm)

export { SignUpLink }
