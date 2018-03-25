import React from 'react'

import SignInForm from '../components/SignIn'
import { SignUpLink } from '../components/SignUp'
import { PasswordForgetLink } from '../components/PasswordForget'

const SignInPage = () => (
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
    <h1>Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

export default SignInPage
