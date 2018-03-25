import React from 'react'
import { Link } from 'react-router-dom'

import SignUpForm from '../components/SignUp'
import * as routes from '../constants/routes'

const SignUpPage = () => (
  <div
    style={{
      background: '#fff',
      margin: 'auto',
      boxShadow:
        '0 0 0 1px rgba(16,22,26,.1),0 4px 8px rgba(16,22,26,.2),0 18px 46px 6px rgba(16,22,26,.2)',
      borderRadius: 8,
      padding: 20,
      maxWidth: 500,
    }}
  >
    <h1>Sign Up</h1>
    <SignUpForm />
    <p>
      Already have an account? <Link to={routes.SIGN_IN}>Sign In</Link>
    </p>
  </div>
)

export default SignUpPage
